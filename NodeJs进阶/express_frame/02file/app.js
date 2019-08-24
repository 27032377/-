const express = require('express');
const fs = require('fs');
const formidable = require('formidable');
const path = require('path');
const querystring = require('querystring');

const PORT = 3001;

let app = express();

let router = express.Router();

// router.get('/', (req, res, next) => {
//     fs.readFile('./views/index.html', (err, data) => {
//         if (err) {
//             next(err);
//         }
//         res.writeHead(200, {
//             'content-type': 'text/html;charset=UTF-8;'
//         })
//         res.end(data);
//     })
// })

router.get('/init', (req, res, next) => {
    console.log(req.query);
    const {name = "", age = "", img = ""} = req.query || {};
    console.log(name, '-', age);
    res.setHeader('status', 200);
    let image = "";
    if (name && age && img) {
        try {
            image = fs.readFileSync(img);
        } catch (err) {
            next(err);
        }
    }
    res.json({
        success: true,
        errorCode: '',
        errorMessage: '',
        data: {
            text: '- Title:',
            name,
            age,
            image
        }
    });
})

router.post('/add', (req, res, next) => {
    // 解析文件
    let form = new formidable.IncomingForm();
    /**
     * @desc formidable
     * @param {uploadDir， keepExtensions}
     * @uploadDir 默认为 os.tmpdir(),返回一个字符串，表明操作系统的默认临时文件目录
     * @keepExtensions 是否保存后缀名，默认为false
     */
    form.uploadDir = path.join(__dirname, 'public', 'images');
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        // console.log(fields);  // {name, age, key: value}
        // console.log(files); // File
        const {name, age} = fields;
        /**
         * @desc path
         * @param {basename, parse}
         * @basename path.basename()方法返回path的最后一部分
         * @parse path.parse()方法返回一个对象，其中包含{dir, root, base, name, ext}
         */
        let file = path.parse(files.img.path);
        let filePath = path.join(file.dir, file.base);
        const rename = `${name}_${age}_${Date.now()}.${file.ext}`
        fs.rename(filePath,  `${path.join(file.dir, rename)}`, err => {
            if (err) {
                next(err);
            }
            console.log('重命名成功');
        })
        let getString = querystring.stringify({
            name,
            age,
            img: rename
        })
        res.redirect(`/home?${getString}`);
    })
})

// 静态资源中间件，指定静态资源路径
app.use('/public', express.static('./public'))
app.use('/home', express.static('./views'));


// router的最后处理异常路由
router.all('*', (req, res) => {
    res.end('404 NOT FOUND');
})

app.use(router);

// 错误优先
app.use((err, req, res, next) => {
    res.send('<h1>服务端异常</h1>');
})

app.listen(PORT, () => {
    console.log('server running at port 3001');
})