<template>
    <div class="shutter">
        <nuxt-img src="/恋華工房.png" logo="恋華工房" class="logo fixed inset-0 m-auto z-50" sizes="620px" />

    </div>
</template>

<script setup lang="ts">

const emit = defineEmits({
    load: null
})

onMounted(() => {
    setTimeout(() => {
        emit('load')
    }, 800)
})

</script>

<style lang="scss" scoped>
.shutter {
    @apply bg-color6 z-50 inset-0 fixed;

    animation: byeShutter 3s forwards;

    &::before,
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        margin: auto;
    }

    &::before {
        @apply bg-color4;
        width: 100%;
        height: 0px;
        animation: shutterOpen1 3s forwards;
    }

    &::after {
        width: 120%;
        height: 0;
        margin-left: -10%;
        @apply bg-color2;
        animation: shutterOpen2 3s forwards;
    }

    .logo {
        animation: logoAnimation 3s forwards;
    }
}

@keyframes logoAnimation {
    40% {
        opacity: 1;
    }

    70% {
        opacity: 0;
    }

    100% {
        opacity: 0;
    }
}


@keyframes byeShutter {
    70% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        display: none;
    }
}

@keyframes shutterOpen1 {
    50% {
        width: 100%;
        height: 0px;
    }

    90% {
        width: 100%;
        height: 100%;
    }

    100% {
        width: 100%;
        height: 100%;
    }
}

@keyframes shutterOpen2 {
    60% {
        width: 120%;
        height: 0;
        transform: rotate(5deg);
    }

    90% {
        width: 120%;
        height: 100%;
        transform: rotate(-5deg);
    }

    100% {
        width: 120%;
        height: 100%;
        transform: rotate(-5deg);
    }
}
</style>
