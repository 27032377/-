## install注册为全局组件

*通过Vue.use(Component)来进行注册*

```
import Vue from 'vue'
import Loading from './Loading/Comp.vue'

Vue.use(Loading)

<!-- other file -->
this.$loading.open(options)
this.$loading.close()
```