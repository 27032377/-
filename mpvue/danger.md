# mpvue与vue的差一点

## 模板语法

### 不支持纯 HTML

***小程序里所有的 BOM/DOM 都不能用，也就是说 v-html 指令不能用***

### 不支持部分复杂的 JavaScript 渲染表达式

***template中的 {{}} 双花括号的部分，直接编码到 wxml 文件中，所以无法支持复杂的 JavaScript 表达式。***

***目前可以使用的有 + - * % ? : ! == === > < [] .***

```
// 这种不支持，建议写成 computed
<p>{{ message.split('').reverse().join('') }}</p>
```

### 不支持过滤器

### class 与 style 绑定

可以使用computed方法生成class或style字符串，插入到页面中

不支持class与style绑定中的classObject和styleObject语法

```
// 支持
<div class='container' :class='computedClassStr'></div>
<div class='container' :class='{active: isActive}'></div>

// 不支持
<div class='container' :class='computedClassObject'></div>

data () {
    return {
        isActive: true
    }
},
computed: {
    computedClassStr () {
        return this.isActive ? 'active' : ''
    },
    computedClassObject () {
        return { active: this.isActive }
    }
}
```

### 用在组件上

***暂不支持在组件上使用class与style绑定***

### 时间处理器

- 在input 和 textarea 中 change 事件会被转为 blur 事件

- 没有prevent，因为小程序里没有默认事件

- once不能做，因为小程序没有removeEventListener

### 表单控件绑定

建议开发过程中直接使用 ***微信小程序:表单组件*** 。

## 组件

### Vue组件

有且只能使用单文件组件.vue的形式支持。不支持：

- 动态组件

- 自定义render

- x-template字符串模板

- 组件上定义click等原生事件、v-show、v-if、class、style

- slot

- 异步组件

- transition

### 小程序组件

mpvue可以支持小程序的原生组件，需要注意的是原生组件上的事件绑定，需要以vue的事件绑定语法来绑定，如 ***bindchange='eventNamr'*** 事件，需要写成 ***@change='evetName'***