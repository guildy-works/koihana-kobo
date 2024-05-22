<template>
    <OpeningShutter @load="loaded" />
    <NuxtLayout  class="page">
        <NuxtPage class="w-full h-full" :hasAnimationDone="isLoaded" />
    </NuxtLayout>
</template>

<script setup lang="ts">
const isLoaded = ref(false)

const loaded = () => {
    isLoaded.value = true
}

</script>

<style scoped>
.page-enter-active,
.page-leave-active {
    transition: all 0.8s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}

.page {
    @apply w-full h-full;
    animation: contentScale 4s forwards;
    transform:  scale(0.9);
    opacity: 0;
}

@keyframes contentScale {
    70% {
        transform:  scale(0.9);
        opacity: 0.3;
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
}
</style>
