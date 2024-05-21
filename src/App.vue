<template>
    <OpeningShutter />
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style>
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
    animation: contentScale 1s forwards;
}

@keyframes contentScale {
    70% {
        transform: perspective(800px) scale(0.9) rotateX(15deg);
    }

    100% {
        transform: perspective(800px) scale(1) rotateX(0);
    }
}
</style>
