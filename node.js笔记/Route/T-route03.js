// 如果一个URL比较完整，包括querystring部分(就是GET请求查询字符串部分)、hash部分：http://127.0.0.1:3000/a.html?id=123#456，此时req.url是/a.html?id=123，而hash不属于。
// 也就是说querystring属于req.url，但是hash不属于
// 用正则太麻烦，Node中内置了模块

let http = require("http");
let fs = require("fs");
let url = require('url'); // 内置url模块详见官方api文档

http.createServer((req, res) => {
    // 如果此刻访问http://127.0.0.1:3000/a.html?id=123#456
    // 此处打印的是/a.html?id=123
    //console.log(req.url);

    // url.parse第二个参数默认为false，true将search部分转化为对象=urlJson.query
    let urlJson = url.parse(req.url, true);
    console.log(urlJson); // 生成一个对象
    res.end('');
}).listen(3000, '127.0.0.1');

console.log('listen at 3000 port');