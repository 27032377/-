const Koa = require('koa');
const KoaRouter = require('koa-router');

const app = new Koa();
let router = new KoaRouter();
let routerA = new KoaRouter();
let routerB = new KoaRouter();

// 子路由A
routerA.get('/home', async ctx => {
    console.log(ctx.request.url);
    ctx.body = '路由A home';
});
routerA.get('/todo', async ctx => {
    console.log(ctx.request.url);
    ctx.body = '路由A todo';
});

// 子路由B
routerB.get('/home', async ctx => {
    console.log(ctx.request.url);
    ctx.body = '路由B home';
});
routerB.get('/todo', async ctx => {
    console.log(ctx.request.url);
    ctx.body = '路由B todo';
});

// 父路由
router.use('/home', routerA.routes(), routerA.allowedMethods());
router.use('/page', routerB.routes(), routerB.allowedMethods());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3002, () => {
    console.log('Server started...');
});
