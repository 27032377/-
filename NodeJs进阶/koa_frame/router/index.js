const Router = require('koa-router');

// 配置路由对象
let router = new Router();

// 规则
router.get('/', async ctx => {
    ctx.render('index');
}).post('/post', async ctx => {
    ctx.body = ctx.request.body
}).post('/user/login', async ctx => {
    const {username, password} = ctx.request.body;
    // 回写cookie，保存用户sessionId
    if (username !== 'abc' || password !== '123') {
        // ctx.set('content-type', 'text/plain;charset=UTF-8;')
        // ctx.throw(400, 'login error');
        ctx.response.redirect('/');
        return;
    } else {
        ctx.session.user = {
            username: 'abc'
        }
        ctx.body = '登录成功';
    }
}).get('/list', ctx => {
    ctx.body = `<h2>当前用户为${ctx.session.user.username}</h2>`
})

module.exports = router;