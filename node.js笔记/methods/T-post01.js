const http = require('http');
const fs = require('fs');
const serveStatic = require('serve-static');
const url = require('url');
const finalhandler = require('finalhandler');
const querystring = require('querystring');

let serve = serveStatic('./public/static', {
    'index': ['index.htm', 'index.html']
});

http.createServer((req, res) => {
    const pathName = url.parse(req.url, true).pathname;
    if (pathName === '/addStudent') {
        // 定义一个变量，用于缓存请求体的信息
        let content = '';

        // req提供一个on监听方法，数据发送中触发data事件
        // 如果post请求体很长，此时会分段，一段约800k
        req.on('data', chunk => {
            console.log('收到一个请求体段落');
            content += chunk;
        })

        // 当所有数据发送完毕之后，此时会触发end事件
        req.on('end', () => {
            content = querystring.parse(content);
            const {name, age, sex} = content;
            const stuData = `姓名：${name},\n年龄：${age},\n性别：${sex}`;
            fs.writeFile(`./DB/student_data/${name}.txt`, stuData, stuErr => {
                if (stuErr) {
                    res.end('false');
                } else {
                    res.end('success');
                }
            })
        })
        return
    }
    // 使用静态资源
    serve(req, res, finalhandler(req, res));
}).listen(3000);

console.log('服务器运行在3000端口');