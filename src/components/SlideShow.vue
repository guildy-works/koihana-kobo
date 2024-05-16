<template>

</template>

<script lang="ts">
export default defineComponent({
    props: {
        title: {
            type: String,
            required: true
        },

    },
    setup() {
        const hoge = "hoge hoge"

        return {
            hoge
        }
    }
})
</script>
