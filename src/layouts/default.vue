<template>
    <div id="app-layout">
        <header>

            <Box direction="horizontal" class="ml-4 lg:ml-48 h-10 lg:h-20 items-center">
                <Box>
                    <Logo class="" />
                </Box>
                <TitleLine class="ml-14 mb-2" :title="'恋華工房'" />
            </Box>
        </header>
        <main class="min-h-svh">
            <slot />
        </main>
        <footer class="min-h-80 bg-color6">
            <Box class="relative w-full  justify-center items-center n">

                <Box direction="vertical"
                    class="justify-center max-w-screen-xl  items-start p-4 sm:p-8 md:p-16 lg:p-24">

                    <Box direction="horizontal" class="items-center justify-evenly gap-8 mt-12 flex-wrap">
                        <nuxt-img src="/恋華工房.png" alt="Nuxt Logo" loading="lazy" sizes="200px" style="width: 160px;" />

                        <Box>
                            <HaraitamaheKiyometamahe />
                            <a class="bg-color3 text-color7 text-center font-bold py-2 px-4 rounded-xl mt-4"
                            href="https://koihana.base.shop/" target="_blank">
                                {{"ショップ" }}
                            </a>
                            <a class="bg-color1 text-color7 text-center font-bold py-2 px-4 rounded-xl mt-4"
                            href="https://thebase.com/inquiry/koihana-base-shop" target="_blank">
                                {{"お問い合わせ" }}
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
