import Vue from 'vue'

const Toast = Vue.extend(require('./Toast.vue'))
let instance

export default {
    setString (str, times) {
        const oStr = String(str)
        if (oStr.replace(/\s+/g, '') === '') return
        if (!instance) {
            instance = new Toast({
                el: document.createElement('div')
            })
        }
        if (instance.visible) return
        instance.text =  oStr
        document.body.appendChild(instance.$el)
        Vue.nextTick(() => {
            instance.visible = true
        })
    }
}