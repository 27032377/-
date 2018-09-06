export function initEvents (vm: Component) {
    // 初始化
    vm._events = Object.create(null)
    vm._hasHookEvent = false
    const listeners = vm.$options._parentListeners
    // 如果继承的父类有事件监听，则更新
    if (listeners) {
        updateComponentListeners(vm, listeners)
    }
}

export function eventsMixin (Vue: Class<Component>) {
    const hookRE = /^hook:/
    Vue.prototype.$on = function (event: string | Array<string>, fn: Function): Component {
        const vm: Component = this
        // array,元素上绑定过个监听事件click mousemove...
        if (Array.isArray(event)) {
            // 遍历每个监听的事件，然后$on到Vue
            for (let i = 0, l = event.length; i < l; i++) {
                this.$on(event[i], fn)
            }
        } else {
            // string类型直接push到_events事件代理机制中
            (vm._events[event] || (vm._events = [])).push(fn)
        }
        return vm
    }
}

Vue.prototype.$once = function (event: string, fn: Function): Component {
    const vm: Component = this
    function on () {
        vm.$off(event, on)
        fn.apply(vm, arguments)
    }
    on.fn = fn
    // 执行一次后，会调用on().$off移除监听
    vm.$on(event, on)
    return vm
}

Vue.prototype.$off = function (event?: string | Array<string>, fn?: Function): Component {
    const vm: Component = this
    // 如果没有事件off监听，则_events原型为空，返回vm
    if (!arguments.length) {
        vm._events = Object.create(null)
        return vm
    }
    if (Array.isArray(event)) {
        for (let i = 0, l = event.length; i < l; i++) {
            this.$off(event[i], fn)
        }
        return vm
    }
    const cbs = vm._events[event]
    if (!cbs) return vm
    if (!fn) {
        vm._events[event] = null
        return vm
    }
    if (fn) {
        let cb
        let i = cbs.length
        // 遍历_events数组，如果需要移除的事件与之前绑定监听的事件匹配，则移除
        while (i--) {
            cb = cbs[i]
            if (cb === fn || cb.fn === fn) {
                cbs.splice(i, 1)
                break
            }
        }
    }
    return vm
}

Vue.prototype.$emit = function (event: string): Component {
    const vm: Component = this
    let cbs = vm._events[event]
    if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs
        for (let i = 0, l = cbs.length; i < l; i++) {
            try {
                // 将fn的this作用域置于vm
                cbs[i].apply(vm, args)
            } catch (e) {}
        }
    }
    return vm
}

