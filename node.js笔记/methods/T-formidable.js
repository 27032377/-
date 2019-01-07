// npm 上可以install一个formidable的模块，用来处理post请求。甚至可以处理多媒体、zip上传

let formidable = require('formidable');
let http = require('http');
let url = require('url');
let finalhandler = require('finalhandler');
let serveStatic = require('serve-static');
let fs = require('fs');
let path = require('path');

let serve = serveStatic('./public/static', {
    'index': ['index.html', 'index.htm']
})

http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;
    // create a new incoming form
    let form = new formidable.IncomingForm();
    if (pathname.toLocaleLowerCase() === '/addstudent') {
        // fields 表示普通控件
        // files 表示文件控件
        form.parse(req, (err, fields, files) => {
            console.log(fields);
            console.log('====');
            console.log(files);
            res.end('上传成功');
        })
        return
    }
    if (pathname.toLocaleLowerCase() === '/upload') {
        // form.uploadDir上传文件保存路径
        form.uploadDir = './uploads/image';
        // fields 表示普通控件
        // files 表示文件控件
        form.parse(req, (err, fileds, files) => {
            console.log(fileds);
            console.log('===');
            console.log(files);
            if (!files) {
                res.end('请上传文件');
                return
            }
            // formidable传文件天生没有拓展名
            let name;
            let extname;
            if (Object.prototype.toString.call(files) === '[object Object]') {
                // file字段为form表单的name属性值
                name = files.file.name;
                // require('path').extname()获取拓展名
                extname = path.extname(name);
            }
            // fs.rename 重命名(oldname含路径, newname含路径, callback)
            fs.rename(files.file.path, files.file.path + extname, err => {
                res.end('上传成功');
            });
        })
        return
    }
    serve(req, res, finalhandler(req, res));
}).listen(3000);

console.log('listen at 3000 port');