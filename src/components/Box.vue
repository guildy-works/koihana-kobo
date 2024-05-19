<template>
    <div :class="computedClasses">
        <slot></slot>
    </div>
</template>

<script lang="ts">
export default defineComponent({
    props: {
        direction: {
            type: String as () => 'horizontal' | 'vertical',
            default: 'vertical',
        },
    },
    setup(props) {
        const computedClasses = computed(() => [
            'flex',
            props.direction === 'vertical' ? 'flex-col' : 'flex-row',
        ]);

        return {
            computedClasses
        };
    }
});
</script>
