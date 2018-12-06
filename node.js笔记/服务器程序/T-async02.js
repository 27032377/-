let http = require("http");
let fs = require("fs");

let server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html;charset=UTF-8')
    
    let ip = req.connection.remoteAddress;
    console.log(`用户IP为${ip}`);
    // fs.readFile(path[,options],callback)
    // options <object> | <string>
        // encoding <string> | <null>默认为null
        // 如果没有指定encoding，则返回原始buffer
    fs.readFile('./public/01.html', (err, data) => {
        // 把文本文件的内容进行呈递：
        res.end(data);
    })
})

server.listen(3000);

console.log('服务器运行在3000端口');