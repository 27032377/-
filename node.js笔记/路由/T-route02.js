// 静态文件资源使用
let http = require('http');
let fs = require('fs');

http.createServer((req, res) => {
    let path = req.url || ''
    // 'text/html'浏览器无法解析css文件
    // res.setHeader('Content-Type', 'text/html;charset=UTF-8');
    if (/^\/music/.test(path)) {
        console.log('路径中/music开头')
        fs.readFile('../public/02.html', (err, data) => {
            res.end(data);
        })
    // 开辟静态资源路由，不然html文件无法引入静态css
    } else if(/.css$/.test(path)) {
        console.log('路径中包含.css结尾的资源');
        fs.readFile('../public/public.css', (err, data) => {
            res.end(data);
        })
    // 开辟静态资源路由，不然img标签无法引入图片
    } else if(/.jpg$/.test(path)) {
        console.log('路径中包含.jpg结尾的资源')
        fs.readFile('../public/01.jpg', (err, data) => {
            res.end(data);
        })
    // ...包括各种静态资源，包括js文件等
    } else {
        res.end('没有这个页面');
    }
}).listen(3000);

console.log('server listen at 3000 port');