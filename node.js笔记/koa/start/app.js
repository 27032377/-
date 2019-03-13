const fs = require('fs');
const Koa = require('koa');
const app = new Koa();

// 应用程序
/**
 app.use(async ctx => {
    console.log(ctx)
    ctx.body = 'hello world';
})*/
/**
{
request:
{
    method: 'GET',
    url: '/',
    header:
    {
       host: '127.0.0.1:3000',
       connection: 'keep-alive',
       'cache-control': 'max-age=0',
       'upgrade-insecure-requests': '1',
       'user-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.26 Safari/537.36 Core/1.63.6823.400 QQBrowser/10.3.3117.400',
       accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*!/!*;q=0.8',
       'accept-encoding': 'gzip, deflate, br',
       'accept-language': 'zh-CN,zh;q=0.9'
     }
},
response:
{
    status: 404,
    message: 'Not Found',
    header: {}
},
app:
{
    subdomainOffset: 2,
    proxy: false,
    env: 'development'
},
originalUrl: '/',
req: '<original node req>',
res: '<original node res>',
socket: '<original node socket>'
}
{
request:
{
    method: 'GET',
    url: '/favicon.ico',
    header:
    {
        host: '127.0.0.1:3000',
        connection: 'keep-alive',
        pragma: 'no-cache',
        'cache-control': 'no-cache',
        'user-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.26 Safari/537.36 Core/1.63.6823.400 QQBrowser/10.3.3117.400',
        accept: 'image/webp,image/apng,image/!*,*!/!*;q=0.8',
        referer: 'http://127.0.0.1:3000/',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh-CN,zh;q=0.9'
    }
},
response:
{
    status: 404,
    message: 'Not Found',
    header: {}
},
app:
{
    subdomainOffset: 2,
    proxy: false,
    env: 'development'
},
originalUrl: '/favicon.ico',
req: '<original node req>',
res: '<original node res>',
socket: '<original node socket>'
}*/

// 级联

// logger
/**
app.use(async (ctx, next) => {
    ctx.body = 'hello world';
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url}-${rt}`);
})
*/

// x-response-time
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
    console.log(ms);
    ctx.body = 'hello world';
})
console.log('==服务已经启动==')
app.listen(3000);