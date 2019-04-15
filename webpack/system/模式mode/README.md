# 模式(mode)

提供 mode 配置选项，告知 webpack 使用相应模式的内置优化

## 用法

值在配置中提供 mode 选项

```
module.exports = {
    mode: 'production'
}
```

或者从CLI参数中传递

```
webpack --mode=production
```

支持以下字符串：

- development 会将 process.env.NODE_ENV 的值设为 development

- production 会将 process.env.NODE_ENV 的值设为 production

## mode:development

*webpack.development.config.js*

```
module.exports = {
    mode: 'development'
}
```

## mode: production

*webpack.production.config.js*

```
module.exports = {
    mode: 'production'
}
```