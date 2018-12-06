import VNodeData from '../types/vNodeData'

export default class VNode {
    // 当前节点的标签名
    tag: string | void;
    // 当前节点的数据对象
    data: VNodeData | void;
    // 数组类型，包含了当前节点的子节点
    children: ?Array<VNode>;
    // 当前节点的文本，一般文本节点或注释节点会有该属性
    text: string | void;
    // 当前虚拟节点对应的真实的dom节点
    elm: Node | void;
    // 节点的namespace
    ns: string | void;
    // 编译作用域
    context: Component | void; // rendered in this component's scope
    // 节点的key属性，用于作为节点的标识，有利于patch的优化
    key: string | number | void;
    // 创建组件实例时会用到的选项信息
    componentOptions: VNodeComponentOptions | void;
    // 组件实例
    componentInstance: Component | void; // component instance
    // 组件的占位节点
    parent: VNode | void; // component placeholder node

    // strictly internal
    raw: boolean; // contains raw HTML?(server only)
    // 静态节点的标识
    isStatic: boolean; // hoisted static node
    // 是否作为根节点插入，被<transition>包裹的节点
    isRootInsert: boolean; // necessary for enter transition check
    // createEmptyVNode占位符
    isComment: boolean; // empty comment placeholder?
    isCloned: boolean; // is a cloned node?
    isOnce: boolean; // is a v-once node?
    asyncFactory: Function | void; // async component factory function
    asyncMeta: object | void;
    isAsyncPlaceholder: boolean;
    ssrContext: Object | void;
    fnContext: Component | void; // real context vm for functional nodes
    fnOptions: ?ComponentOptions; // for SSR caching
    fnScopeId: ?string; // functional scope id support

    constructor (
        tag?: stirng,
        data?: VNodeData,
        children?: ?Array<VNode>,
        text?: string,
        elm?: Node,
        context?: Component,
        componentOptions?: VNodeComponentOptions,
        asyncFactory?: Function
    ) {
        this.tag = tag
        this.data = data
        this.children = children
        this.text = text
        this.elm = elm
        this.ns = undefined
        this.fnOptions = undefined
        this.fnContext = undefined
        this.fnScopeId = undefined
        this.key = data && data.key
        this.componentOptions = componentOptions
        this.componentInstance = undefined
        this.parent = undefined
        this.raw = false
        this.isStatic = false
        this.isRootInsert = true
        this.isComment = false
        this.isCloned = false
        this.isOnce = false
        this.asyncFactory = asyncFactory
        this.asyncMeta = undefined
        this.isAsyncPlaceholder = false
    }
    
    get child (): Component | void {
        return this.componentInstance
    }
}

export const createEmptyVNode = (text: string = '') => {
    const node = new VNode()
    node.text = text
    node.isComment = true
    return node
}

export const createTextVNode = (val: string | number) => {
    return new VNode(undefined, undefined, undefined, String(val))
}

export function cloneVNode (vnode: VNode): VNode {
    const cloned = new VNode({
        vnode.tag,
        vnode.data,
        vnode.children,
        vnode.text,
        vnode.elm,
        vnode.context,
        vnode.componentOptions,
        vnode.asyncFactory
    })
    cloned.ns = vnode.ns
    cloned.isStatic = vnode.isStatic
    cloned.key = vnode.key
    cloned.isComment = vnode.isComment
    cloned.fnContext = vnode.fnContext
    cloned.fnOptions = vnode.fnOptions
    cloned.fnScopeId = vnode.fnScopeId
    cloned.asyncMeta = vnode.asyncMeta
    cloned.isCloned = true
    return cloned
}