// WXML提供模板template，可以在模板中定义代码片段，然后在不同的地方调用
// 使用name属性，作为模板的名字，然后在<template/>内定义代码片段

// 定义模板(使用name属性，作为模板的名字)
<template name="msgItem">
    <view>
        <text>{{index}}: {{msg}}</text>
        <text>Time: {{time}}</text>
    </view>
</template>

// 使用模板
// 使用is属性，声明需要的使用模板，然后将模板所需要的data传入
<template is="msgItem" data="{{...item}}"></template>
Page({
    data: {
        item: {
            index: 0,
            msg: 'this is a template',
            time: '2018-10-25'
        }
    }
})