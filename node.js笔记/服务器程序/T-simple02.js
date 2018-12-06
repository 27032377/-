// 从侧面证明 NodeJS 是单线程的，如果程序有错误，此时唯一的Node进程将会停止，导致所有访问者无法访问
let http = require('http');

let server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html;charset=UTF-8;')
    // 获取客户端IP
    let ip = req.connection.remoteAddress || req.socket.remoteAddress
    // 来一个访问者，就随机一个数字
    let num = parseInt(Math.random() * 10000);
    if (num < 2000) {
        throw new Error('出现小于2000错误')
    }
    res.end(`你的数字是：${num}，ip为${ip}`);
})

server.listen(3000);
console.log('监听本地3000端口');