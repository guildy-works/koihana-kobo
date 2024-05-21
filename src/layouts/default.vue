<template>
    <div id="app-layout">
        <header class="flex overflow-hidden items-center">

            <a href="/">
                <Box direction="horizontal" class="ml-4 lg:ml-48 h-10 lg:h-20 items-center mt-auto cursor-pointer">
                    <Box>
                        <Logo class="" />
                    </Box>
                    <TitleLine class="ml-14 mb-2" :title="'恋華工房'" />
                </Box>
            </a>

            <a href="#buttons-with-link">
                <button
                    class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                        <i class="fas fa-heart" aria-hidden="true"></i>
                    </span>
                </button>
            </a>
        </header>
        <main>
            <slot />
        </main>
        <footer class="min-h-96 bg-color6">
            <Box class="relative w-full  justify-center items-center n">

                <Box direction="vertical"
                    class="justify-center max-w-screen-xl  items-start p-4 sm:p-8 md:p-16 lg:p-24">

                    <Box direction="horizontal" class="items-center justify-evenly gap-8 mt-12 flex-wrap">
                        <nuxt-img src="/恋華工房.png" alt="Nuxt Logo" loading="lazy" sizes="200px" style="width: 160px;" />

                        <Box>
                            <HaraitamaheKiyometamahe />
                            <a class="button bg-color3 text-color7 mt-4" href="https://koihana.base.shop/"
                                target="_blank">
                                {{ "ショップ" }}
                            </a>
                            <a class="button bg-color1 text-color7 mt-4"
                                href="https://thebase.com/inquiry/koihana-base-shop" target="_blank">
                                {{ "お問い合わせ" }}
                            </a>

                        </Box>


                    </Box>
                </Box>

            </Box>
        </footer>
    </div>
</template>

<script lang="ts">

</script>

<style scoped>
header {
    @apply items-center z-40;
    position: sticky;
    top: 0;
    height: 78px;
}

main {
    min-height: calc(100svh - 80px);
}

footer {
    @apply flex justify-center items-center;
    min-height: 60vh;
}
</style>
