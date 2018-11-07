// WXML提供2中文件引用方式import和include

// import可以在该文件中使用目标文件定义的template

// item.wxml
<template name="item">
    <text>{{text}}</text>
</template>

// index.wxml引用
<import src="item.wxml"/>
<template is="item" data="{{text: 'sb'}}"></template>

// include可以将目标文件除了<template/><wxs/>外的整个代码引入，相当于是拷贝到include位置

<include src="header.wxml"/>
<view>body</view>
<include src="footer.wxml"/>
// 相当于
<view>header</view>
<view>body</view>
<view>footer</view>