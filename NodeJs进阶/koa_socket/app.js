const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const path = require('path');
const views = require('koa-views');
const session = require('koa-session');
const bodyParser = require('koa-bodyparser');

const MESSAGES = [
    {username: 'a', content: 'xxx'}
]

let app = new Koa();

app.use(bodyParser());

// render(app, {
//     // 页面查找的目录
//     root: path.join(__dirname, 'views'),
//     // 设置后缀名
//     extname: '.html',
//     // debug: false 每次压缩页面及js，不会实时更新
//     debug: process.env.NODE_ENV !== 'production'
// });

let router = new Router();

// 在服务器内存中存储用户数据，session
let store = {
    myStore: {},
    get(key) {
        return this.myStore[key] || '';
    },
    set(key, value) {
        this.myStore[key] = value;
    },
    destroy() {
        delete this.myStore[key];
    }
}

app.use(views(path.join(__dirname, './views'), {
    extension: 'handlebars'
}))

router.get('/', async ctx => {
    await ctx.render('index')
}).post('/login', async ctx => {
    const {username, password} = ctx.request.body
    // 不要验证直接挂在 session
    ctx.session.user = { username }
    ctx.redirect('/list')
}).get('/list', async ctx => {
    console.log(ctx.session.user)
    await ctx.render('list', {
        username: ctx.session.user,
        message: MESSAGES
    })
})

// 处理静态资源
app.use(static(path.resolve(__dirname, './public')));

// session 一定要在路由前处理
app.keys = ['five'];
app.use(session({store}, app));

// 路由
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('server is running at port 3000');
});