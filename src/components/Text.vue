<template>
    <div>
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue';

type Variant = 'body' | 'heading' | 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';

export default {
    name: 'Text',
    props: {
        variant: {
            type: String as () => Variant,
            default: 'body',
            validator: (value: string) => ['body', 'heading', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span'].includes(value)
        }
    },
    setup(props) {
        const tag = computed(() => {
            switch (props.variant) {
                case 'heading':
                    return 'h1';
                case 'caption':
                    return 'span';
                case 'h1':
                case 'h2':
                case 'h3':
                case 'h4':
                case 'h5':
                case 'h6':
                    return props.variant;
                default:
                    return 'p';
            }
        });

        return {
            tag
        };
    }
};
</script>

<style scoped>
/* Add your desired styles here */
</style>
