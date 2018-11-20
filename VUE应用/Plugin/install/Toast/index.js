import toastComp from './Toast.vue'

let Toast = {}
let tpl = null

Toast.install = function (Vue, options) {
    Vue.prototype.$toast = options => {
        if (!tpl) {
            let ToastTpl = Vue.extend(toastComp)
            tpl = new ToastTpl()
            document.getElementById('app').appendChild(tpl.$mount().$el)
        }
        tpl.text = options.text
        // 定时开关
        clearTimeout(timer)
        timer = setTimeout(() => {
            let toast = document.querySelector('#app > .toast')
            if (toast) {
                document.getElementById('app').removeChild(toast)
            }
        }, options.time ? options.time : 3000);
    }
}

export default Toast


// other file
import Vue from 'vue'
import Toast from './Toast'
Vue.use(Toast)

// for use
interface options {
    text: String,
    time?: Number
}
this.$toast(options)