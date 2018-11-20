<template>
    <article class="sf-toast" v-show="visible">
        <div id="sf-toast-main">
            <p id="text" v-text="text"></p>
        </div>
    </article>
</template>

<script>
export default {
    name: 'sfToast',
    data () {
        return {
            text: '',
            visible: false
        }
    }
}
</script>

