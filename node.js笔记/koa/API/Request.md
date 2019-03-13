# Request

## request.header

请求标头对象

## request.headers

请求标头对象

## request.method

请求方法

## request.length

返回以数字返回请求的Content-Length，或undefined

## request.url

获取请求URL

## request.origin

获取URL的来源，包括protocol和host

```
ctx.request.origin // => http://example.com
```

## request.href

获取完整的请求URL，包括protocol、host和url

```
ctx.request.href // => https://example.com/foo/bar?q=1
```

## request.path

获取请求路径名

## request.querystring

根据？获取原始查询字符串