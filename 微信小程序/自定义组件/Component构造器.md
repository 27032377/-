Component构造器
=========
*定义段与示例方法*
---------
- Component构造器可用于自定组件，调用Component构造器时可以指定组件的属性、数据、方法等

定义段 | 类型 | 是否必填 | 描述
:-:|:-:|:-:|:-
properties|Object<br> Map|否|组件的对外属性，是属性名到属性设置的映射表，属性设置可包含三个字段，type表示属性类型、value表示属性初始值、obser表示属性值被更改时的相应函数
data|Object|否|组件的内部数据，和properties一同用于组件的模板渲染
methods|Object|否|组件的方法，包括事件相应函数和任意的自定义方法
behaviors|String<br>Array|否|类似于mixins和traits的组件间代码复用机制
created|Function|否|组件生命周期函数，在组件实例进行页面节点数时执行，***此时不能调用setData***
attached|Function|否|组件生命周期函数，在组件实例进入页面节点树时执行
ready|Function|否|组件生命周期函数，在组件布局完成后执行，此时可以获取节点信息
moved|Function|否|组件生命周期函数，在组件实例被移动到节点树另一个位置时执行
detached|Function|否|组件生命周期函数，在组件实例被从页面节点树移除时执行
relations|Object|否|组件间关系定义
externalClasses|String<br>Array|否|组件接受的外部样式类
options|Object<br>Map|否|一些选项
lifetimes|Object|否|组件生命周期声明对象，组件的声明周期：created,attached,ready,moved,detached将收归到lifetimes字段内进行声明，原有声明方式仍旧有效，如同时存在两种声明方式，则lifetimes字段内声明方式优先级最高
pageLifetimes|Object|否|组件所在页面的生命周期声明对象，目前仅支持页面的show和hide两个生命周期
definitionFilter|Function|否|定义段过滤器，用于自定义组件拓展，参见[自定义组件拓展](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/extend.html)
---
- 生成的组件实例可以在组件的方法、生命周期函数和属性observer中通过this访问。组件包含一些通用属性和方法

属性名|类型|描述
:-|:-|:-
is|String|组件的文件路径
id|String|节点id
dataset|String|节点dataset
data|Object|组件数据，包括内部数据和属性值
properties|Object|组件数据，包括内部数据和属性值
---
方法名|参数|描述
:-|:-|:-
setData|Object newData|设置data并执行视图层渲染
hasBehavior|Obeject<br>behavior|检查组件是否具有behavior
triggerEvent|string name<br>Object detail<br>Object options|触发事件，参见[组件事件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/events.html)
createSeletorQuery||创建一个SelectorQuery对象，选择器选取范围为这个组件实例内
createIntersectionObserver||创建一个IntersectionObserver对象，选择器选取范围为这个组件实例内
selectComponent|String selector|使用选择器选择组件实例检点，返回匹配到的第一个组件实例对象
selectAllComponents|String selector|使用选择器选择组件实例节点，返回匹配到的全部组件实例对象组成的数组
getRelationNodes|String relationKey|获取这个关系所对应的所有关联节点
---
#### 代码示例：
```
Component({
    behaviors: [],
    properties: {
        // 属性名
        myProperty: {      
            type: String, // 类型(必填),目前接受的类型包括:String, Number, Boolean, Object, Array, null
            value: '', // 属性初始值(可选)
            observer: function(newVal, oldVal, changedPath) {
                // 属性被改变时执行的函数(可选),也可以写成在methods段中定义的方法名字符串
                // 通常newVal就是新设置的数据，oldVal是旧数据
            }
        },
        myProperty2: String // 简化的定义方式
    },
    data: {}, // 私有数据，可用于模板渲染
    lifetimes: {
        // 生命周期函数，可以为函数，或一个在methods中定义的方法名
        attached: function () {},
        moved: () {}
        // ...
    },
    ready: function() {},
    pageLifetimes: {
        // 组件所在页面的生命周期函数
        show: function() {}
    },
    methods: {
        onMyButtonTap: function() {
            this.setData({
                // 更新属性和数据的方法与更新页面数据的方法类似
            })
        },
        // 内部方法建议以下划线开头
        _myPrivateMethod: function(){
            this.setData({
                'A[0].b': 'myPrivateData'
            })
        },
        _propertyChange: function(newVal, oldVal){}
    }
})
```
---
***注意：***
在properties定义段中，属性名采用驼峰写法，在wxml中，指定属性值时则对应使用连接字符写法，应用于数据绑定时采用驼峰写法

> ## 使用Component构造器构造页面
事实上，小程序页面也可以视为自定义组件。因而，页面也可以使用Component构造器构造，拥有与普通组件一样的定义段与实例方法。但此时要求对应json文件中包含usingComponents定义段。

此时，组件的属性可以用于接收页面的参数，如访问页面/pages/index/index?paramA=123&paramB=xyz，如果声明有属性paramA或paramB，则它们会被赋值为123或xyz。

#### 代码示例：
```
{
    "usingComponents": {}
}

Component({
    properties: {
        paramA: Number,
        paramB: String
    },
    methods: {
        onLoad: function () {
            this.data.paramA // 页面参数paramA的值
            this.data.paramB // 页面参数paramB的值
        }
    }
})
```