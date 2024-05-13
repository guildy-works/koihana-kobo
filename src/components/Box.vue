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
            type: String as () => 'horizontal' | 'vertical',
            default: 'vertical',
        },
        spacing: {
            type: String,
            default: '4' // Default spacing using Tailwind's spacing scale
        },
        align: {
            type: String as () => 'start' | 'center' | 'end' | 'baseline' | 'stretch',
            default: 'centre' // or 'center', 'end', 'baseline', 'stretch'
        },
        justify: {
            type: String as () => 'start' | 'center' | 'end' | 'between' | 'around',
            default: 'center' // or 'center', 'end', 'between', 'around'
        },
        wrap: {
            type: Boolean,
            default: false,
        }
    },
    setup(props) {
        const computedClasses = computed(() => [
            'flex',
            props.direction === 'vertical' ? 'flex-col' : 'flex-row',
            `space-${props.spacing}`,
            `items-${props.align}`,
            `justify-${props.justify}`,
            props.wrap ? 'flex-wrap' : 'flex-nowrap'
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
