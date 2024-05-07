<template>
    <div id="app-layout">
        <header>

        </header>
        <main class="min-h-svh">
            <slot />
        </main>
        <footer class="min-h-80 bg-color6">
            <Stack class="p-5 sm:p-12 flex-wrap" justify="strech">
                <Stack class="flex-1" justify="center">
                    <NuxtImg src="恋華つむぎ.svg"  />
                </Stack>

                <Logo />
                <div class="flex-1"  />
            </Stack>
        </footer>
    </div>
</template>

<script lang="ts">

</script>
