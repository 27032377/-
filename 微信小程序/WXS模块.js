// WXS代码可以编写在wxml文件中的<wxs>标签内，或以.wxs为后缀名的文件夹内。
// 每一个.wxs文件和<wxs>标签都是一个单独的模块
// 每个模块都有自己独立的作用域。即在一个模块里面定义的变量和函数，默认为私有，对其他模块不可见
// 一个模块要想对外暴露其内部的私有变量和函数，只能通过module.exports实现

// /pages/tools.wxs
var foo = "'hello world' from tool.wxs"
var bar = d => d
module.exports = {
    FOO: foo,
    bar
}
module.exports.msg = "some msg"

// page/index/index.wxml
<wxs src="../../tools.wxs" module="tools"/>
<view>{{tools.msg}}</view>
<view>{{tools.bar(tools.FOO)}}}</view>
//页面输出
// some msg
// 'hello world' from tools.wxs

// require函数
// 在.wxs模块中引用其他wxs文件模块，可以使用require函数

/* 只能引用.wxs文件模块，且必须使用相对路径
wxs模块均为单例，wxs模块在第一次被引用时，会自动初始化为单例对象。多个页面，多个地方，多次引用，使用的都是同一个wxs模块对象
如果一个wxs模块在定义之后，一直没有被引用，则改模块不会被解析与运行
*/

// /pages/logic.wxs
var tools = require("./tools.wxs")
console.log(tools.FOO)
console.log(tools.bar("logic.wxs"))
console.log(tools.msg)

// page/index/index.wxml
<wxs src="../../logic.wxs" module="logic"/>

//控制台输出：
// 'hello world' from toos.wxs
// logic.wxs
// some msg

// module 当前<wxs>标签的模块名。必填字段
// src 引用.wxs文件的相对路径。仅当本标签为单闭合标签或标签内的内容为空时有效

// wxml
<wxs moudle="foo">
    var some_msg = "hello world"
    module.exports = {msg: some_msg}
</wxs>
<view>{{foo.msg}}</view>
// 页面输出hello world
// 上面例子声明了一个名字为foo的模块，将some_msg变量暴露出来，供当前页面使用

// /pages/index/index.js
Page({
    data: {
        msg: "'hello world' from js"
    }
})
// /pages/index/index.wxml
<wxs src="../../comm/wxs" module="some_comms"/>
// 参数为some_comms模块中的foo
<view>{{some_comms.bar(some_comms.foo)}}</view>
// 参数为page/index/index.js里面的msg
<view>{{some_comms.bar(msg)}}</view>

/*<wxs>模块只能在定义模块的WXML文件中被访问到。使用<include>或<import>是，<wxs>模块不会被引入到对应的wxml文件中
<template>标签中，只能会用定义该<template>的wxml文件中定义的<wxs>
*/