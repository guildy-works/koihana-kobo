<template>
    <Box wrap direction="horizontal" class="min-h-lvh p-4 sm:p-8 md:p-24 min-sm:flex-col-reverse">
        <Box class="w-full sm:w-1/2 sm:h-full" align="center">

            <Box class="max-w-sm">
                <Box class="">
                    <Box align="center" class="mr-12">
                        <nuxt-img src="/salt.png" alt="Nuxt Logo" loading="lazy" sizes="200px" style="width: 160px;" />
                    </Box>
                    <Box class="mt-6 md:mt-12">
                        <HaraitamaheKiyometamahe />
                    </Box>
                </Box>
                <Box class="mt-6 md:mt-12">
                    <p class="text-sm tracking-wide break-words whitespace-pre">
                        {{ $t("各地の海水を汲み上げ精製した塩を配合し、\n\nココロとカラダの浄化のための\n\n八百万のチカラを宿したバスソルトです。\n\nお好きな神様や神宮の地を選んで、\n\n浄化にお使い下さい。") }}<br /><br />
                    </p>
                </Box>
            </Box>

            <Box class="sm:absolute sm:left-0 sm:bottom-0 sm:mb-36 -z-10">
                <SaltOnDish />
            </Box>

        </Box>
        <Box class="w-full sm:w-1/2">
            <Box direction="horizontal" align="center">
                <Logo />
                <Box>
                    <TitleLine :title="$t('恋華工房')" />
                </Box>


            </Box>
            <Box>
                <Carousel :items-to-show="1" :wrap-around="true">
                    <Slide v-for="slide in 10" :key="slide">
                        <nuxt-img src="/top.jpg" alt="トップイメージ" loading="lazy" style="width: 100%;"  sizes="960px" />
                    </Slide>
                    <template #addons>
                        <Navigation />
                        <Pagination />
                    </template>
                </Carousel>
            </Box>
        </Box>
    </Box>
</template>
<script lang="ts">

export default defineComponent({
    setup() {
        const hoge = "hoge hoge"

        return {
            hoge
        }
    }
})
</script>
