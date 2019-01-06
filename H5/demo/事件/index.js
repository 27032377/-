let http = require('http');
let fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('./touch.html', (err, data) => {
        res.end(data);
    })
}).listen(3000);

console.log('listen at 3000 port');