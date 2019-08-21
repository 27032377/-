# express

## API

- res.download('./xxx.txt'); 下载文件
- res.json({}); 响应json对象
- res.jsonp(数据); 配合jsonp 要求客户端请求的时候也是jsonp的方式，并且callback
- res.redirect(); 重定向 301是永久重定向 302是临时重定向
- res.send(); 发送字符串数字自动content-type
- res.sendFile(); 显示一个文件
- res.sendStatus(); 响应状态码