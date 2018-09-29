let activeInstance: any = null
let isUpdatingChildComponent: boolean = false

export function initLifecycle (vm: Component) {
    const options = vm.$options
    // locate first non-abstract parent
    // 查找最初的非抽象的父组件 如keep-alive不渲染的组件
    let parent = options.parent
    if (parent && !options.abstract) {
        while (parent.$options.abstract && parent.$parent) {
            parent = parent.$parent
        }
        // 将当前实例放到父组件parent.$children的数组里面
        parent.$children.push(vm)
    }
    // 对实例的$parent赋值
    vm.$parent = parent
    // 设置$root，如果没有父组件，则指向自身
    vm.$root = parent ? parent.$root : vm
    vm.$children = []
    vm.$refs = {}
    vm._watcher = null
    vm._inactive = null
    vm._directInactive = false
    vm._isMounted = false
    vm._isDestroyed = false
    vm._isBeingDestroyed = false
}

export function lifecycleMixin (Vue: Class<Component>) {
                                    // vnode新的dom
    Vue.prototype._update = function (vnode: VNode, hydrating?: boolean) {
        // 缓存旧的dom
        const vm: Component = this
        const prevEl = vm.$el
        const prevVnode = vm._vnode
        const prevActiveInstance = activeInstance
        activeInstance = vm
        vm._vnode = vnode
        // Vue.prototype.__patch__ is injected in entry points
        // Vue原型__patch__在入口处被注入
        // based on the rendering backend used

        // 如果没有旧值，表示第一次渲染
        if (!prevVnode) {
            // 初始化渲染
            vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false)
        } else {
            // 更新
            vm.$el = vm.__patch__(prevVnode, vnode)
        }
        activeInstance = prevActiveInstance
        if (prevEl) {
            prevEl.__vue__ = null
        }
        // vm.$el.__vue__设置为当前实例
        if (vm.$el) {
            vm.$el.__vue__ = vm
        }
        // if parent is an HOC, update its $el as welll
        // 如果父组件是个高阶组件，也更新它的$el
        if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
            vm.$parent.$el = vm.$el
        }
    }
}

Vue.prototype.$forceUpdate = function () {
    const vm: Component = this
    if (vm._watcher) {
        vm._watcher.update()
    }
}

Vue.prototype.$destroy = function () {
    const vm: Component = this
    if (vm._isBeingDestroyed) return
    callHook(vm, 'beforeDestroy')
    vm._isBeingDestroyed = true
    // remove self from parent
    const parent = vm.$parent
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
        remove(parent.$children, vm)
    }
    // teardown watchers
    if (vm._watcher) {
        vm._watcher.teardown()
    }
    // _watchers[i]是_watcher的实例，包含了watch及computed属性的依赖关系
    let i = vm._watchers.length
    while (i--) {
        vm._watcher[i].teardown()
    }
    // remove reference from data ob
    // frozen object may not have observer
    if (vm._data_.__ob__) {
        vm._data_.__ob__.vmCount--
    }
    // call the last hook...
    vm._isDestroyed = true
    // invoke destroy hooks on current rendered tree
    // 在当前渲染树调用destroy钩子函数
    vm.__patch__(vm._vnode, null)
    // fire destroy hook
    callHook(vm, 'destroyed')
    // turn off all instance listeners
    vm.$off()
    // remove __vue__ reference
    if (vm.$el) {
        vm.$el.__vue__ = null
    }
    // release circular reference
    // 释放通知参照
    if (vm.$vnode) {
        vm.$node.parent = null
    }
}

export function mountComponent (
    vm: Component,
    el: ?Element,
    hydrating?: boolean
): Component {
    vm.$el = el
    if (!vm.$options.render) {
        vm.$options.render = createEmptyVNode
        callHook(vm, 'beforeMount')
        let updateComponent = () => {
            // vm._render()返回的是_vnode
            vm._update(vm._render(), hydrating)
        }
    }
    // we set this to vm._watcher inside the watcher's constructor
    // since the watcher's initial patch may call $forceUpdate(e.g. inside child component's mounted hook), which relies on vm._watcher being already defined
    new Watcher(vm, updateComponent, noop, {
        before () {
            if (vm._isMounted) {
                callHook(vm, 'beforeUpdate')
            }
        }
    }, true)
    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    // 收到挂载实例，调用自身的mounted方法
    // mounted被调用为了render-created子组件在它那插入钩子
    if (vm.$vnode == null) {
        vm._isMounted = true
        callHook(vm, 'mounted')
    }
    return vm
}

export function updateChildComponent (
    vm: Component,
    propsData: ?Object,
    parentVnode: MountedComponentVNode,
    renderChildren: ?Array<VNode>
) {
    
}