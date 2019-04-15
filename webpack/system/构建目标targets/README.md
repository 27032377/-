# 构建目标(targets)

因为服务器和浏览器代码都可以用JavaScript编写，所有webpack提供了多种构建目标，可以在webpack配置中设置。

## 用法

要设置 target 属性，主需要在webpack配置中设置target的值

*webpack.config.js*

```
module.exports = {
    target: 'node' // 默认为 web
}
```

上面例子中，使用 node webpack 会编译为用于 [类 node.js]环境(使用Node.js的require，而不是使用任意内置模块(如fs或path)来加载chunk)