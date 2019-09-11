const koa = require('koa');
const bodyparser = require('koa-bodyparser');
const router = require('./router');
const render = require('koa-art-template');
const path = require('path');
const static = require('koa-static');
const session = require('koa-session');

let app = new koa();

app.use(bodyparser());

// 处理错误
app.use(async (ctx, next) => {
    try {
        await next();
    } catch(error) {
        console.log(error)
        ctx.status = 200
        ctx.body = '<h1>server error</h1>'
    }
})

render(app, {
    // 页面查找的目录
    root: path.join(__dirname, 'views'),
    // 设置后缀名
    extname: '.html',
    // debug: false 每次压缩页面及js，包括混淆，静态数据不会实时更新
    // 不是每次都读文件
    debug: process.env.NODE_ENV !== 'production'
})

// 重写静态资源目录
app.use(async (ctx, next) => {
    if (ctx.url.startsWith('/public')) {
        ctx.url = ctx.url.replace('/public', '');
    }
    // 不管url是否满足条件，都要放行
    await next();
})
// 指定静态资源目录
app.use(static(path.resolve(__dirname, 'public')));

// 通过任意字符串为基准进行加密算法的字符串
app.keys = ['some secret hurry']
const sessionConfig = {
    key: 'koa:session', // session的名
    maxAge: 96400000, // 过期时间
    overWrite: true, // 重写
    httpOnly: true, // 不允许客户端操作cookie 
    signed: true, // 签名，保证数据不被串改
    rolling: false, // 过期时间访问顺延
    renew: false // 过期后，是否创建新的cookie
}

// 设置cookie
app.use(session(sessionConfig, app));

/**
 * @desc router
 * @intro
 * 将路由与实例挂钩
 * allowedMethods 优化状态码处理
 * @warn router中间件一定要在指定静态目录前引入
 */
app.use(router.routes()).use(router.allowedMethods());

// 错误处理，仅仅是服务器方的一个log日志记录
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx);
    ctx.body = `<h2>500 server error</h2>`
})

app.listen(8888, () => {
    console.log('server is running at port 8888');
})