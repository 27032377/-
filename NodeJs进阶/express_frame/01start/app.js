const express = require('express');
const router = require('./src/router/index.js');
let app = express();

router.get('/hero', (req, res) => {
    // 服务端渲染
    res.render('hero.html', {
        heros: [{name: 'a'}, {name: 'b'}]
    });
})
// 渲染文件的后缀名(引擎名称)
app.engine('.html', require('express-art-template'));
// 配置默认渲染引擎
app.set('view engine', '.html');

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