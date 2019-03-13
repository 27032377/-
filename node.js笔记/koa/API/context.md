# Context

## ctx.req

Node的request对象

## ctx.res

Node的response对象

绕过Koa的response处理是不被支持的。应避免使用一下node属性：

- res.statusCode

- res.writeHead()

- res.write()

- res.end()

## ctx.request

koa的request对象

## ctx.response

koa的response对象

## ctx.state

推荐的命名空间，用于通过中间件传递信息和前端视图

```
ctx.state.user = await User.find(id);
```

## ctx.app

应用程序的实例引用

## ctx.cookies.get(name, [options])

通过options获取cookie name:

- signed 所请求的cookie应该被签名

## ctx.cookie.set(name, value, [options])

通过options设置cookie name 的 value：

- maxAge 一个数字表示从Date.now()得到的毫秒数

- signed cookie签名值

- expires cookie过期的date

- path cookie路径，默认是'/'

- domain cookie域名

- secure 安全cookie

- httponly 服务器可访问cookie，默认是true

- overwrite 一个布尔值，表示是否覆盖以前设置的同名cookie(默认是false)

## ctx.throw([status], [msg], [properties])

helper方法抛出一个.status属性默认为500的错误，这允许Koa做出是当地相应。

## ctx.assert(value, [status], [msg], [properties])

当!value时，Helper方法抛出类似于.throw()的错误

```
ctx.assert(ctx.state.user, 401, 'User not found, please login!');
```