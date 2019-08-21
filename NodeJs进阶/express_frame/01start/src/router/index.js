let { Router } = require('express');
const MIME = {'content-type': 'text/plain;charset=UTF-8;'};

let router = Router();
router.get('/login', (req, res) => {
    res.writeHead(200, MIME);
    res.end('login page');
}).get('/register', (req, res) => {
    res.writeHead(200, MIME);
    res.end('register page');
}).get('/download', (req, res) => {
    res.download('./app.js');
}).get('/json', (req, res) => {
    res.json({'a': 'a'});
}).get('/redirect', (req, res) => {
    res.redirect('https://www.baidu.com');
}).get('/routeToLogin', (req, res) => {
    res.redirect('/login');
})

module.exports = router;