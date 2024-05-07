<template>
    <div :class="computedClasses">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { computed } from 'vue';

export default defineComponent({
    props: {
        direction: {
            type: String,
            default: 'horizontal' // or 'horizontal',
        },
        spacing: {
            type: String,
            default: '4' // Default spacing using Tailwind's spacing scale
        },
        align: {
            type: String,
            default: 'start' // or 'center', 'end', 'baseline', 'stretch'
        },
        justify: {
            type: String,
            default: 'start' // or 'center', 'end', 'between', 'around'
        }
    },
    setup(props) {
        const computedClasses = computed(() => [
            'flex',
            props.direction === 'vertical' ? 'flex-col' : 'flex-row',
            `space-${props.spacing}`,
            `items-${props.align}`,
            `justify-${props.justify}`
        ]);

        return {
            computedClasses
        };
    }
});
</script>

<style scoped>
/* You can add additional styles specific to this component */
</style>
