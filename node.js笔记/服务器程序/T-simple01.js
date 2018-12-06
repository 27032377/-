// 写一段程序，证明NodeJS是单线程的
let http = require("http");

// 在服务器程序外定义
// 只给 a 在栈内存开辟了一个空间，所有来访者访问的是同一个 a
let a = 0;

let server = http.createServer((req, res) => {
    // 刷的值越来越高
    a++;
    // 设置头部
    res.setHeader('Content-Type', 'text/html;charset=UTF-8');
    res.end(`你好${a.toString()}`);
})

server.listen(3000);