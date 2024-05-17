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
                        {{
                            $t("各地の海水を汲み上げ精製した塩を配合し、\n\nココロとカラダの浄化のための\n\n八百万のチカラを宿したバスソルトです。\n\nお好きな神様や神宮の地を選んで、\n\n浄化にお使い下さい。")
                        }}<br /><br />
                    </p>
                </Box>
            </Box>

            <Box class="sm:absolute sm:-left-5 sm:bottom-0 sm:mb-36 -z-10">
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
                        <nuxt-img src="/top.jpg" alt="トップイメージ" loading="lazy" style="width: 100%;" sizes="960px" />
                    </Slide>
                    <template #addons>
                        <Navigation />
                        <Pagination />
                    </template>
                </Carousel>
            </Box>
        </Box>

        <Box class="relative min-h-3.5">
            <WavePanel class="absolute inset-0" />

            <p>

                美しき国日本、八百萬の神<br/>
                私たちの生活に寄り添う氏神様<br/>
                祓いたまへ浄めたまへの<br/>
                売上の一部は日本全国の神社の<br/>
                保全活動や復興に充てられます<br/><br/>

                身体の中からも外からも<br/>
                私達をあるべき姿へと<br/>
                導いてくれる<br/><br/>

                自然のチカラ<br/><br/>

                忘れかけた現代社会において<br/><br/>

                本来大切なものを<br/>
                私達に教えてくれる<br/><br/>

                祓いたまへ浄めたまへの<br/>
                バスソルトは入浴以外に<br/><br/>

                盛り塩としても<br/>
                神棚や神様への御供え物としても<br/>
                お使い頂けます<br/><br/>

                シリーズの最初は<br/>
                瀬戸内海に浮かぶ<br/>
                仙酔島の天日塩を含有<br/><br/>

                敢えて無香料にこだわり<br/>
                自然界からの恵みを<br/>
                できるだけそのまま<br/>
                感じて頂く事がテーマです<br/><br/>
            </p>
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
