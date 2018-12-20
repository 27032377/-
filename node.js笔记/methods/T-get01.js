const finalhandler = require('finalhandler');
const http = require('http');
const serveStatic = require('serve-static');
const url = require('url');
const fs = require('fs');

// 配置静态资源服务器，将public/static文件夹静态化出来
let serve = serveStatic('./public/static', {
    'index': ['index.html', 'index.htm']
})

http.createServer(function onRequest (req, res) {
    // 为调用的接口增加路由
    let pathname = url.parse(req.url).pathname;
    if (pathname === '/addStudent') {
        // 拿到get请求的参数，就是拿到地址栏querystring
        let queryJson = url.parse(req.url, true).query
        console.log(queryJson);
        const {name, age, sex} = queryJson;
        const data = `姓名：${name},\n年龄：${age},\n性别：${sex}`
        // fs.writeFile(file, data[,options], callback)异步
        /**
         * @file 文件名或文件描述
         * @data 写入数据
         * @option 可选，{encoding:默认utf-8,mode:默认0o666,flag:默认w}
         * @callback 成功写入后的回调函数
         **/
        fs.writeFile(`./DB/student_data/${name}.txt`, data, stuErr => {
            if (stuErr) {
                res.end('false');
            } else {
                res.end('success')
            }
        })
        // 如果是调用接口，不用使用静态资源
        return
    }
    // 使用静态资源
    serve(req, res, finalhandler(req, res));
}).listen(3000);

console.log('服务器运行在3000端口');