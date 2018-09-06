import { Component } from '../interface'
import { getData, proxy } from '../window'
import { observe } from '../observer'

function initData (vm: Component) {
    let data = vm.$options.data
    data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {}
    // ... 警告data得是一个函数
    // proxy data on instance
    // 返回值为data属性的一个数组
    const keys = Object.keys(data)
    const props = vm.$options.props
    const methods = vm.$options.methods
    let i = keys.length
    while (i--) {
        const key = keys[i]
        // ... 警告重复定义
        // proxy遍历所有Vue实例中的属性，如果 key in allKeys[j],则返回allKeys[j][key]
            // 故this.data.xx | this.computed.oo 才能直接写成this.xx | this.oo
        proxy(vm, `_data`, key)
    }
    observe(data, true)
}

