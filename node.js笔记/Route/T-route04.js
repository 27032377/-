var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var querystring = require('querystring');

const MIME = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.png': 'image/png',
    '.html': 'text/html;charset=UTF-8',
    '.css': 'text/css',
    '.js': 'application/x-javascript'
}

let server = http.createServer((req, res) => {
    // 用户地址栏信息
    let urlJson = url.parse(req.url, true);
    // 用户所访问页面(资源)
    let pathname = urlJson.pathname;
    // 拓展名
    let extname = path.extname(pathname);
    console.log(pathname);
    // 根据不同的拓展名，setHeader对应的MIME类型
    if (MIME.hasOwnProperty(extname)) {
        res.setHeader('Content-Type', MIME[extname]);        
    }
    fs.readFile(`../static${pathname}`, (err, data) => {
        if (err) {
            console.log(err);
            fs.readFile('../static/404.html', (err404, data404) => {
                res.end(data404);
            })
            return
        }
        res.end(data);
    })
}).listen(3000, '127.0.0.1');

console.log('Server start at 3000 port');