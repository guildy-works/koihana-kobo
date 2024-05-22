<template>
    <div :class="{
        root: true,
        show: isIn
    }" :style="`transition:all ${duration}ms cubic-bezier(0.24, 0.26, 0, 0.64);transition-delay:${delay}ms;transform: ${transformStyle};transform-origin:${props.transformOrigin}`"
        ref="target">
        <slot />
    </div>
</template>

<script setup lang="ts">
const target = ref<HTMLElement | null>(null)
const targetIsVisible = ref(false)
const isInitialized = ref(false)

const props = defineProps({
    delay: {
        type: Number,
        default: 0
    },
    duration: {
        type: Number,
        default: 1000
    },
    once: {
        type: Boolean,
        default: true
    },
    animationIn: {
        type: Boolean,
        default: false,
        required: true
    },
    translateX: {
        type: String,
        default: '-10px',
    },
    translateY: {
        type: String,
        default: '-20px',
    },
    rotate: {
        type: String,
        default: '-3deg',
    },
    scale: {
        type: Number,
        default: 0.9,
    },
    // eslint-disable-next-line @typescript-eslint/ban-types
    transformOrigin: {
        type: String as () => "bottom" | "center" | "left" | "right" | "top" | (string & {}),
        default: '',
    },

})
const isIn = computed(() => targetIsVisible.value && props.animationIn)
const transformStyle = computed(() => isIn.value
    ? "translate(0px, 0px) rotate(0) scale(1)"
    : `translate(${props.translateX},${props.translateY}) rotate(${props.rotate}) scale(${props.scale})`
)

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
    opacity: 0;
}

.show {
    opacity: 1;
}
</style>
