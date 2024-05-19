<template>
    <Box class="items-center justify-center overflow-x-hidden">
        <PagesTopSection />
        <WavePanel class="w-full justify-center">
            <Box class="p-5 justify-center w-full flex-wrap sm:gap-12 md:gap-24 lg:gap-32" direction="horizontal">
                <p>

                    美しき国日本、八百萬の神<br />
                    私たちの生活に寄り添う氏神様<br />
                    祓いたまへ浄めたまへの<br />
                    売上の一部は日本全国の神社の保全活動や復興に充てられます<br /><br />

                    身体の中からも外からも私達をあるべき姿へと導いてくれる<br /><br />

                    自然のチカラ<br /><br />

                    忘れかけた現代社会において本来大切なものを私達に教えてくれる<br /><br />
                    祓いたまへ浄めたまへのバスソルトは入浴以外に<br />
                    盛り塩としても<br />
                    神棚や神様への御供え物としても<br />
                    お使い頂けます<br /><br />

                    シリーズの最初は 瀬戸内海に浮かぶ<br />
                    仙酔島の天日塩を含有<br /><br />

                    敢えて無香料にこだわり自然界からの恵みを<br />
                    できるだけそのまま感じて頂く事がテーマです
                </p>
                <Box>
                    <div class="flex-1" />
                    <nuxt-img src="/salt_image.png" alt="トップイメージ" loading="lazy" class="w-full mt-8"
                        style="width: 100%;" sizes="320px" />
                </Box>
            </Box>

        </WavePanel>
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
