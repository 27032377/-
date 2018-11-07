// 要编写一个自定义组件，首先需要在json文件中进行自定义组件声明（将component字段设为true，可将这一组文件设为自定义组件）
{
    "component": true
}
// 在组件wxss中不应使用ID选择器、属性选择器和标签名选择器
// 在自定义组件的js文件中，需要使用Component()来注册组件，并提供组件的属性定义、内部数据和自定义方法
// 组件的属性值和内部数据将被用于wxml的渲染，其中，属性值是可由组件外部传入的。

Component({
    properties: {
        // 外部传入
        innerText: {
            type: String,
            value: 'default value'
        }
    },
    data: {
        // 组件内部数据
        someData: {}
    },
    methods: {
        // 自定义方法
        customMethod () {}
    }
})

// 使用自定义组件
// 使用已注册的自定义组件前，首先要在页面的json文件中进行引用声明。此时需要提供每个自定义组件的标签名和对应的自定义组件文件路径
{
    "usingComponents": {
        "component-tag-name": "path/to/the/custom/component"
    }
}

// 在组件模板中可以提供一个<slot>节点，用于承载组件引用时提供的子节点
// component.wxml
<view class="wrapper">
    <view>这里是组件的内部节点</view>
    <slot></slot>
</view>

// 引用组件
<view>
    <comopnent-tag-name>
        {/* 这部分内容将被放置在组件<slot>的位置上 */}
        <view>这里是插入到组件slot中的内容</view>
    </comopnent-tag-name>
</view>

// 默认情况下，一个组件的wxml中只能有一个slot，当需要多个slot时，可以在组件js中声明启用
Component({
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    }
})
// 此时，可以在这个组件的wxml中使用多个slot，以不同的那么来区分
// component.wxml
<view class="wrapper">
    <slot name="before"></slot>
    <view>组件内部细节</view>
    <slot name="after"></slot>
</view>
// 使用时，用slot属性来将节点插入到不同的slot上
<view>
    <component-tag-name>
        <view slot="before">slot name='before'的内容</view>
        <view slot="after">slot name='after'的内容</view>
    </component-tag-name>
</view>

// 组件样式
// 组件对应wxss文件的样式，只对组件wxml内的节点生效。编写组件样式时，需要注意：
// 组件和引用组件的页面不能使用id选择器、属性选择器和标签名选择器，请改用class选择器
// 组件和引用组件的页面中使用后代选择器(.a .b)在一些极端情况下会有非预期的表现，如遇，请避免使用
// 字元素选择器(.a>.b)只能用于view组件与其子节点之间，用于其他组件可能导致非预期是情况
// 继承样式，如font、color，会从组件外继承到组件内
// 除继承样式外，app.wxss中的样式、组件所在页面的样式对自定义组件无效
// #a {} 组件中不能用
// [a] {} 组件中不能用
// button {} 组件中不能用
// .a > .b {} 除非.a是view组件节点，否则不一定会生效

// 外部样式类
// 有时，组件希望接受外部传入的样式类，此时可以在component中用externalClasses定义段定义若干个外部样式类
Component({
    externalClasses: ['my-class']
})
<component-tag-name class="my-class">这段文本的颜色由组件外的class决定</component-tag-name>

// 全局样式类
// 使用外部样式类可以让组件使用指定的组件外样式，如果希望组件外样式类能够完全影响组件内部，可以将组件构造器中的option.addGlobalClass字段置为true
Component({
    options: {
        addGlobalClass: true
    }
})