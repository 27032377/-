## VNode分类

![vnode](https://segmentfault.com/img/bVITTR?w=495&h=540, 'vnode分类')

***VNode*** 可以理解为 *vue* 框架的虚拟 *dom* 的基类，通过 new 实例化的 ***VNode*** 大致可以分为几类:

- EmptyNode: 没有内容的注释节点
- TextVNode: 文本节点
- ElementVNode: 普通元素节点
- ComponentVNode: 组件节点
- CloneVNode: 克隆节点，可以是以上任意类型的节点，唯一的区别在于 *isCloned* 属性为 *true*