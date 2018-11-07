// 监听路由需要在app.vue文件中或者子路由中

watch: {
    '$route' (to, from) {}
}

// 监听对象中的某个字段不是必须得以下格式
data () {
    return {
        addr: {
            value
        }
    }
}
watch: {
    addr: {
        handler (newVal, oldVal) {}
    }
}

// 也可以通过obj.key来监听
watch: {
    'addr.value' (newVal, oldVal) {}
}