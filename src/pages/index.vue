<script lang="ts">
import Stack from "../components/Stack.vue"

export default defineComponent({
    setup() {
        const hoge = "hoge hoge"
        return {
            hoge
        }
    }
})
</script>

<template>
    <div class="h-screen">
        {{ hoge }}
        <nuxt-img src="/salt.png" alt="Nuxt Logo" loading="lazy" sizes="100vw sm:50vw md:400px" />

        <Stack   />
        <Logo  />
    </div>
</template>

