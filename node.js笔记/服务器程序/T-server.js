// 读取内置模块http，这个模块开发服务器用的
let http = require("http");

// 创建一个服务器
let server = http.createServer((req, res) => {
    let a = 1;
    let b = 2;
    res.end(`<h1> Hello ${a + b + 2} world </h1>`)
})

// 监听
server.listen(3000, "127.0.0.1");

console.log("服务器运行在3000端口")