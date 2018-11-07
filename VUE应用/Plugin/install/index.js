// install用来添加全局方法或属性
// 这个方法的第一个参数是Vue构造器，第二个参数是一个可选的选项对象

import Comp from './Comp.vue'

let Loading = {}
let tpl = null
let count = 0
Loading.install = function (Vue, options) {
    Vue.prototype.$loading = {
        open: (options) => {
            count++
            if (!tpl) {
                let LoadingTpl = Vue.extend(Comp)
                tpl = new LoadingTpl
                document.getElementById('app').appendChild(tpl)
            }
            if (options) {
                tpl.text = options.text ? options.text : '加载中...'
                tpl.background = options.background ? options.background : 'rgba(0,0,0,0.6)'
                tpl.color = options.color ? options.color : '#fff'
            }
            if (options && options.lock === false) {
                document.body.style.overflow = ''
            } else {
                document.body.style.overflow = 'hidden'
            }
        },
        close: () => {
            if (--count === 0) {
                let loading = document.querySelector('#app > .loading')
                if (loading) {
                    document.getElementById('app').removeChild(loading)
                }
                document.body.style.overflow = ''
                tpl = null
            }
        }
    }
}

export default Loading