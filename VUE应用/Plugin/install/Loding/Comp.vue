<template>
    <transition name="fade">
        <div
            class="loading"
            v-show="visible"
            @touchmove.prevent
            :style="{backgroundColor: background || ''}"
        >
            <div class="wrap" :style="{color: color || ''}">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-loading"></use>
                </svg> 
                <p>{{text}}</p>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    data () {
        return {
            text: '加载中...',
            background: 'rgba(0,0,0,0.6)',
            color: '#fff',
            visible: true
        }
    }
}
</script>

<style>
@keyframes rotate {
    from{transform: rotate(0);}
    to{transform: rotate(360deg);}
}
.icon {
    animation: rotate 1s infinite;
}
</style>

