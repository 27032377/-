const Koa = require('koa');
const KoaJson = require('koa-json');
const KoaRouter = require('koa-router');
const path = require('path');
const render = require('koa-ejs'); // 渲染html
const app = new Koa();
const router = new KoaRouter();
const mysql = require('mysql');
const bodyParser = require('koa-bodyparser'); // 解析post请求
const static = require('koa-static');

async function sql (opts = {state: '1'}) {
    // 连接数据库
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'my_test02'
    })
    connection.connect();
    if (opts.state === '1') {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM employee, department where employee.deptmo = department.deptmo;', (err, res) => {
                if (err) {
                    reject(err);
                    throw err;
                } else {
                    resolve(res);
                }
            })
        })
    }
    if (opts.state === '2') {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE employee SET salary = 2444 WHERE empno = 1003;', (err, res) => {
                if (err) {
                    reject(err);
                    throw err;
                } else {
                    resolve(res);
                }
            })
        })
    }
};

// json pretty
app.use(KoaJson());

// 为了能够解析router.post中的请求数据，必须在app.use(router.routes())前use(bodyParser())
app.use(bodyParser());

// 设置静态资源路径
const staticPath = './assets';
app.use(static(
    path.join(__dirname, staticPath)
))

// app.use(async ctx => { ctx.body = { msg: 'Hello Koa!' }; });
// router.get('/test', ctx => { ctx.body = 'Hello Router!'; });

// 配置模板引擎
render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'layout',
    viewExt: 'html',
    cache: false,
    debug: false
});

// 路由跳转
router.get('/', index);
router.get('/add', showAdd);

async function index (ctx) {
    await ctx.render('index', {
        title: 'I LOVE IT'
    })
};

async function showAdd (ctx) {
    const data = await sql()
    await ctx.render('showAdd', {
        data
    })
};

// 添加路由方法
router.post('/getData', getData);

async function getData (ctx) {
    console.log('xxxx');
    const body = ctx.request.body;
    console.log(body);
    await sql({state: '2'});
    ctx.redirect('/');
};

// 配置路由模块
app.use(router.routes()).use(router.allowedMethods());

app.listen(3001, () => {
    console.log('Server started...');
});