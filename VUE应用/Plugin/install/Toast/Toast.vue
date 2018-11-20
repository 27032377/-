<template>
    <transition name="fade">
        <section class="toast">
            <div class="back"></div>
            <div class="pop">
                <p>{{ text }}</p>
            </div>
        </section>
    </transition>
</template>

<script>
export default {
    name: 'toast',
    data () {
        return {
            text: ''
        }
    }
}
</script>

<style lang="less" scoped>
.toast {
    position: relative;
    z-index: 999;
    .back {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    .pop {
        opacity: .76;
        background: #333;
        border-radius: 4px;
        position: fixed;
        top: 50%;
        left: 50%;
        // 中和top50%与left50%不居中，让弹出层出现在屏幕正中间
        transform: translate(-50%, -50%);
        p {
            margin: 0;
        }
    }
}
</style>
