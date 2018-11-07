// 在组件上使用wx:for控制属性绑定一个数组，即可使用数组中各项的数据重复渲染该组件。默认数组的当前项的下标变量名默认为index，数组当前项的变量名默认为item
<view wx:for="{{array}}">{{index}}: {{item.msg}}</view>

// 使用wx:for-item可以指定数组当前元素的变量名
// 使用wx:for-index可以指定数组当前下标的变量名
<view
    wx:for="{{array}}"
    wx:for-index="idx"
    wx:for-item="itemName"
>{{idx}}: {{itemName.msg}}</view>

// wx:for也可以嵌套