slot并不一定必须得配合name属性来使用
它仅仅起到一个占位的作用，可以用来进行布局

<template>
    <div class="sf-section">
        <div class="sf-section-header" v-if="header">{{header}}</div>
        <div class="sf-section-container"><slot/></div>
    </div>
</template>

应用
<template>
    <sf-section header="月结卡号">
        <section>slot对应的内容</section>
    </sf-section>
</template>