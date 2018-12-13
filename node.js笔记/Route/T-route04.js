let http = require('http');
let fs = require('fs');
let url = require('url');
let path = require('path');
let querystring = require('querystring');

const MIME = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.png': 'image/png',
    '.html': 'text/html;charset=UTF-8',
    '.css': 'text/css',
    '.js': 'application/x-javascript'
}

const server = http.createServer((req, res) => {
    // 用户地址栏信息
    let urlJson = url.parse(req.url, true);
    // 用户所访问页面(资源)
    let pathname = urlJson.pathname;
    // 拓展名
    let extname = path.extname(pathname).toLowerCase();
    // 没有拓展名的场景
    if (!extname && !!pathname) {
        // 如果不是以/结尾，此时会造成浏览器识别引入文件路径层次出现问题
        // 127.0.0.1/a 和 127.0.0.1/a/不一样。
        // 前者认为是同级目录下的文件，后者认为是a文件夹下的文件
        if (pathname.substr(-1) !== '/') {
            // 重定向，自动补全/
            res.writeHead(302, {'Location': `${pathname}/`})
        }
        pathname += '/index.html';
    }
    let filePath = `../static${pathname}`;
    console.log(pathname);
    // 根据不同的拓展名，setHeader对应的MIME类型
    if (MIME.hasOwnProperty(extname)) {
        res.setHeader('Content-Type', MIME[extname]);        
    }
    fs.readFile(filePath, (err, data) => {
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