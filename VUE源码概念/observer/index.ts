import Dep from './dep'
import { def } from '../window'


export class Observer {
    value: any;
    dep: Dep;
    // 根$data的数量
    vmCount: number;
    constructor (value: any) {
        this.value = value
        this.dep = new Dep()
        this.vmCount = 0
        def(value, '__ob__', this)
        // 数组的监听
        if (Array.isArray(value)) {
            const augment = hasProto ? protoAugment : copyAugment
            augment(value, arrayMethods, arrayKeys)
            this.observeArray(value)
        } else {
        // 对象通过setters/getter监听
            this.walk(value)
        }
    }
    walk (obj: Object) {
        const keys = Object.keys(obj)
        for (let i = 0; i < keys.length; i++) {
            defineReactive(obj, keys[i])
        }
    }
    observeArray (items: Array<any>) {
        for (let i = 0, l = items.length; i <l; i++) {
            observe(items[i])
        }
    }
}
// 数组的监听无法Object.defineProperty,根据length监听
// Object.create(prototype, descriptors)返回一个具有指定的内部原型且包含指定的属性的新对象
// 用__proto__来继承，就是创建一个继承自Array.prototype的Object:Obeject.create(Array.prototype)
// 在这个继承了数组原生方法的对象上添加方法或者覆盖原有方法，然后创建一个数组，把这个数组的__proto__指向这个对象
// 这样这个数组的响应式的length属性又得以保留，又获得了新的方法，而且无入侵，不会改变本来的数组原型
export function observe (value: any, asRootData: ?boolean): Observer | void {
    //... value类型检测
    let ob: Observer | void
    // 如果value有从Observer继承来的__ob__属性
    if (hasOwn(value, '__ob__') && value.__ob__instanceof Observer) {
        ob = value.__ob__
    } else if (
        shouldObserve &&
        !isServerRendring() &&
        (Array.isArray(value) || isPlainObject(value)) &&
        // Objext.isExtensible返回boolean，对象是否可拓展
        Object.isExtensible(value) &&
        !value._isvalue
    ) {
        ob = new Observer(value)
    }
    if (asRootData && ob) {
        ob.vmCount++
    }
    return ob
}

// 对象的监听
function defineReactive (
    obj: Object,
    key: string,
    val: any,
    customSetter?: ?Function,
    shallow?: boolean
) {
    const dep = new Dep()
    // 对象属性必须是可配置的
    const property = Object.getOwnPropertyDescriptor(obj, key)
    if (property && property.configurable === false) return
    const getter = property && property.get
    const setter = property && property.set
    if ((!getter || setter) && arguments.length === 2) {
        val = obj[key]
    }
    let childOb = !shallow && observe(val)
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter () {
            const value = getter ? getter.call(obj) : val
            if (Dep.target) {
                dep.depend()
                if (childOb) {
                    childOb.dep.depend()
                    if (Array.isArray(value)) {
                        dependArray(value)
                    }
                }
            }
            return value
        },
        set: function reactiveSetter (newVal) {
            const value = getter ? getter.call(obj) : val
            if (newVal == value) return
        }
    })
}