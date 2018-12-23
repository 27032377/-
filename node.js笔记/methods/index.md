# get 请求的参数在 URL 中

## Node.js 程序如果获得 get 请求，实际上就是如何解析 URL。

***url.parse(req.url, ture).query***

***POST请求报文中Request URL：xxxx.com/xxx***

***GET请求报文中Request URL：xxxx.com/xxx?name=x&sex=x***