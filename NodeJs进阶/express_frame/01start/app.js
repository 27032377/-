const express = require('express');
let app = express();
let router = express.Router();
const MIME = {'content-type': 'text/plain;charset=UTF-8;'};
router.get('/login', (req, res) => {
    res.writeHead(200, MIME);
    res.end('login page');
}).get('/register', (req, res) => {
    res.writeHead(200, MIME);
    res.end('register page');
})

app.use(router);
// const URL = {
//     '/a': 'a',
//     '/b': 'b'
// }
// app.use() 应用级的中间件
// app.use((req, res, next) => {
//     let url = req.url || '';
//     let content = 'OK';
//     if (url in URL) {
//         content = URL[url] || '';
//     }
//     // res.setHeader('content-type', 'text/html');
//     res.writeHead(200, {
//         'content-type': "text/plain;charset=utf-8;"
//     })
//     res.end(content);
// })
app.listen(8888, () => {
    console.log("服务开启，端口8888");
});