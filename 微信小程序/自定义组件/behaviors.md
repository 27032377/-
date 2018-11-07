# behaviros

## 定义和使用behaviors
*behaviors* 是用于组件间代码共享的特性，类似于一些编程语言中的'mixins'或'traits'

*每个 behavior 可以包含一组属性、数据、生命周期和方法，组件引用它时，它的属性、数据和方法会被合并到组件中，生命周期函数也会在对应的时机被调用。每个组件可以引用多个 behavior。 behavior 也可以引用其他 behavior 。*

**behavior需要使用Behavior()构造器定义。**

>代码示例：
~~~
// my-behavior.js
module.exports = Behavior({
    behaviors: [],
    properties: {
        myBehaviorProperty: {
            type: String
        }
    },
    data: {
        myBehaviorData: {}
    },
    attached: function() {},
    methods: {
        myBehaviorMethod: function(){}
    }
})
~~~
组件引用时，在behaviors定义段中将它们逐个列出即可。
>代码示例：
~~~
// my-component.js
var myBehavior = require('my-behavior')
Component({
    behaviors: [myBehavior],
    properties: {
        myProperty: {
            type: String
        }
    },
    data: {
        myData: {}
    },
    attached: function() {},
    methods: {
        myMethod: function() {}
    }
})
~~~
*在上例中， my-component 组件定义中加入了 my-behavior ，而  my-behavior 中包含有 myBehaviorProperty 属性、 myBehaviorData 数据字段、 myBehaviorMethod 方法和一个 attached 生命周期函数。这使得 my-component 最终包含了 myBehaviorProperty 的属性、数据、方法和生命周期。当组件触发 attached 生命周期时，会依次触发 my-behavior 中的 attached 生命周期函数和 my-component 中的 attached 生命周期函数。*