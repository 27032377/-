# declare 外部变量声明

## 常见于其他框架、库的使用

```
// Cannot find name '$'
$(function () {
    // todo
})

// *.d.ts
declare let $;
$(function () {
    // todo
})
```