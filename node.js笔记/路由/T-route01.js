let http = require("http");
let fs = require("fs");

let server = http.createServer((req, res) => {
    let endFn = str => {
        res.end(str)
    }
    // 能够识别html标签
    res.setHeader('Content-Type', 'text/html;charset=UTF-8')
    let reg = /^\/student\/[\d]{6}$/;
    let path = req.url.toLowerCase();
    if (path.indexOf('/music') > -1) {
        endFn('音乐频道');
    } else if (reg.test(path)) {
        let xuehao = /^\/student\/([\d]{6})$/.exec(path)[1];
        fs.readFile('../DB/student.json', (err, data) => {
            if (err) {
                console.log(err);
                endFn('文件读取失败');
                return
            }
            // fs通过readFile获取到的文件必须toString()
            let json = JSON.parse(data.toString());
            // 数据库无该数据
            if (!json.hasOwnProperty(xuehao)) {
                endFn('查无该学号');
                return
            }
            let dataObj = json[xuehao.toString()];
            console.log(dataObj);
            res.write(`姓名是${dataObj.name};<br/>学号是${xuehao};<br/>年龄是${dataObj.age};<br/>成绩是${dataObj.score}`);
            // 结束输出流，让网页loading停止转动
            res.end('');
        })
    } else {
        endFn('主页');
    }
})

server.listen(3000);

console.log('访问3000端口')