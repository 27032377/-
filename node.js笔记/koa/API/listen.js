/**
 Koa应用程序不是HTTP服务器的1对1展现。可以将一个或多个koa应用程序安装在一起，形成具有单个HTTP服务器的更大应用程序。
 创建并返回HTTP服务器，将给定的参数传递给 Server#listen()
 */

 const Koa = require('koa');
 const app = new Koa();
 app.listen(3000);

 // 这里的app.listen()方法只是一下方法的语法糖

 const http = require('http');
 const Koa = require('koa');
 const app = new Koa();
 http.createServer(app.callback()).listen(3000);

// 这意味着可以将同一个应用程序同时作为HTTP或HTTPS或多个地址
// app.callback()返回适用于http.createServer()方法的回调函数来处理请求

const http = require('http');
const https = require('https');
const Koa = require('koa');
const app = new Koa();
http.createServer(app.callback()).listen(3000);
https.createServer(app.callback()).listen(3001);

// app.use(function) 将给定的中间件方法添加到此应用程序