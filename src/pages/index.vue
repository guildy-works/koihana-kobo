<template>
    <Box class="items-center justify-center overflow-x-hidden">
        <PagesTopSection />
        <WavePanel class="w-full justify-center">
            <Box class="p-5 justify-center items-center w-full flex-wrap sm:gap-12 md:gap-24 lg:gap-32 max-w-screen-lg"
                direction="horizontal">
                <p class="max-w-screen-sm w-full">
                    <Skew class="bg-color6">
                        祓へたまへ浄めたまへ
                    </Skew>

                    <Skew class="bg-color6">
                        美しき国日本、八百萬の神<br /><br />
                        私たちの生活に寄り添う氏神様<br />
                    </Skew>

                    <Skew class="bg-color6" :delay="10">
                        祓いたまへ浄めたまへの<br />
                        売上の一部は日本全国の神社の保全活動や復興に充てられます。<br /><br />
                    </Skew>

                    <Skew class="bg-color6" :delay="20">
                        身体の中からも外からも私達をあるべき姿へと導いてくれる。<br /><br />

                        自然のチカラ<br /><br />
                    </Skew>

                    <Skew class="bg-color6" :delay="50">
                        忘れかけた現代社会において本来大切なものを私達に教えてくれる<br /><br />
                        祓いたまへ浄めたまへのバスソルトは入浴以外に<br />
                        盛り塩としても<br />
                        神棚や神様への御供え物としても<br />
                        お使い頂けます。<br /><br />
                    </Skew>

                    <Skew class="bg-color6" :delay="75">
                        敢えて無香料にこだわり自然界からの恵みを<br />
                        できるだけそのまま感じて頂く事がテーマです。
                    </Skew>
                </p>
                <Box>
                    <div class="flex-1" />
                    <nuxt-img src="/salt_image.png" alt="トップイメージ" loading="lazy" class="w-full mt-8"
                        style="width: 100%;" sizes="320px" />
                </Box>
            </Box>

        </WavePanel>

        <Box class="p-5 justify-center items-center w-full flex-wrap sm:gap-12 md:gap-24 lg:gap-32 max-w-screen-lg my-24 sm:my-48 md:my-64 lg:my-96"
            direction="horizontal">

            <Box class="max-w-screen-sm  w-full mt-4 flex-col gap-4">
                <HaraitamaheKiyometamahe />
                <h2 class="mt-4 text-xl text-color3">仙酔島の塩</h2>

                <Skew class="bg-white">
                    <p> シリーズの最初は、瀬戸内海に浮かぶ仙酔島の天日塩を含有しました。</p>
                </Skew>
                <Skew class="bg-white">
                    <p>
                        ヒマラヤ岩塩 + 仙酔島や厳島など各地の塩を配合したバスソルトです。<br />
                        盛り塩としてもご利用いただけます。
                    </p>
                </Skew>
                <Skew class="bg-white">
                    <p>
                        瀬戸内海に浮かぶ仙酔島は、
                        日本で最初の瀬戸内海国立公園に指定されました。<br />
                        満干差４ｍにもなる仙酔島で、満潮時のみの海水を汲み上げ、ミネラル・エネルギーを、<br />
                        そのままに形にした天日塩をふんだんに配合しております。
                    </p>
                </Skew>
                <Skew class="bg-white">
                    <p>
                        約3億年前の純粋なミネラルをたっぷり含んだ、100％自然由来で天然色のヒマラヤピンク岩塩。<br />
                        太古の昔、ヒマラヤ山脈は海底にありました。それから数億年をかけて、地球は何度も地穀変動を繰り返すうちに、
                    </p>
                </Skew>
                <Skew class="bg-white">
                    <p>
                        インド大陸とユーラシア大陸が衝突し、海底が地上に隆起しました。<br />
                        まだ、汚染されていない海水をたっぷり含んだヒマラヤの大地は、
                    </p>
                </Skew>
                <Skew class="bg-white">
                    <p>
                        恐竜誕生以前の約3億8千年前、1,000℃以上の岩をも溶かすマグマによって神秘的な「塩の化石」を作り出したといわれています。<br />
                        それがヒマラヤ岩塩です。
                    </p>
                </Skew>
                <Skew class="bg-white">
                    <p>
                        ヒマラヤ山脈の地層から採取したヒマラヤ岩塩お湯に溶けやすいサイズにしました。<br />
                        長い歴史と自然変動の結晶で誕生した、<br />
                        地球からの贈り物である岩塩を全身で体感ください。
                    </p>
                </Skew>
            </Box>
            <Box class="max-w-screen-sm  w-full ">
                <div class="flex-1" />
                <nuxt-img src="/仙酔島.jpg" alt="仙酔島" loading="lazy" class="w-full mt-8" sizes="620px" />
                <nuxt-img src="/bottles.png" alt="祓へたまへ浄めたまへ" loading="lazy" class="w-full mt-8" sizes="620px" />
                <a class="button bg-color1 text-color7 mt-8" href="https://koihana.base.shop/items/86245817"> 商品詳細 </a>
            </Box>
        </Box>

    </Box>
</template>
