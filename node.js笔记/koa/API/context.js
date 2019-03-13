/**
 * app.context 是从其创建ctx的原型。可以通过app.context为ctx添加其他属性。这对于将ctx添加到整个应用程序中使用的属性或方法非常有用，这可能会更加有效(不需要中间件)和更简单(更少的require())，而更多地依赖于ctx，这可以被认为是一种反模式。
 */

 const Koa = require('koa');
 const app = new Koa();

//  app.context.db = () => {
//     console.log('上下文实例添加方法');
//  }
//  app.use(async ctx => {
//     ctx.db();
//  }).listen(3000);

/**
 * Koa Context 将node 的request 和response 对象封装到单个对象中，为编写Web 应用程序和 API提供了许多有用的方法。
 * 每个请求都将创建一个Context，并在中间件中作为接收器引用，或ctx标识符
 */

 app.use(async ctx => {
     const req = JSON.stringify(ctx.request);
     const res = JSON.stringify(ctx.response);
     ctx.body = `req=${req}==res=${res}`;
 }).listen(3000);

 console.log('监听3000端口');