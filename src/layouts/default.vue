<template>
    <div id="app-layout">
        <header>

        </header>
        <main class="min-h-svh">
            <slot />
        </main>
        <footer class="min-h-80 bg-color6">
            <Box class="p-5 sm:p-12 flex-wrap">
                <Box class="flex-1" justify="center">
                    <NuxtImg src="恋華つむぎ.svg" />
                </Box>

                <Logo />
                <div class="flex-1" />
            </Box>
        </footer>
    </div>
</template>

<script lang="ts">

</script>
