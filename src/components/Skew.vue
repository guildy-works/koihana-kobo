<template>
    <div :class="{ backgroundClass: true, root: true }" ref="target">
        <slot />

        <div :class="{
            skew: true,
            show: targetIsVisible && animationIn

        }"
            :style="`transition:transform ${refTime}ms cubic-bezier(0.4, 0.41, 0.1, 0.65);transition-delay:${delay}ms`" />
    </div>
</template>

<script setup lang="ts">
const target = ref<HTMLElement | null>(null)
const targetIsVisible = ref(false)
const refTime = ref(0)
const isInitialized = ref(false)

const props = defineProps({
    backgroundClass: {
        type: String,
        default: 'bg-white'
    },
    speed: {
        type: Number,
        default: 1
    },
    delay: {
        type: Number,
        default: 0
    },
    once: {
        type: Boolean,
        default: true
    },
    animationIn: {
        type: Boolean,
        default: false,
        required: true
    }
})

useResizeObserver(target, () => {
    const width = target.value?.getBoundingClientRect().width;
    if (width) {
        // width / 100px
        const w = width / 100;
        const t = Math.floor(300 * w * props.speed);
        if (t !== refTime.value) {
            refTime.value = t
        }
    }
})

useIntersectionObserver(
    target,
    ([{ isIntersecting }], observerElement) => {
        if (props.once && isInitialized.value) {
            targetIsVisible.value = true
            return
        }

        targetIsVisible.value = isIntersecting
        isInitialized.value = true
    },
)

</script>

<style scoped lang="scss">
.root {
    position: relative;
    width: fit-content;

    .skew {
        position: absolute;
        background: inherit;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: scaleX(1.25) translateX(12%) skewX(-30deg);
        transform-origin: right;
    }

    .show {
        transform: scaleX(0) skewX(-10deg);
    }
}
</style>
