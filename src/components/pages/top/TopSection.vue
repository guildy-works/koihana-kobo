<template>
    <Box class="relative w-full min-h-lvh justify-center items-center overflow-hidden">
        <Box direction="vertical" class="justify-center max-w-screen-xl  items-start p-4 sm:p-8 md:p-16 lg:p-24">

            <Box direction="horizontal" class="items-center justify-evenly gap-8 mt-12 flex-wrap">
                <Box class="w-full lg:w-1/2 lg:h-full max-w-lg items-center">
                    <Box class="mr-8 items-center">
                        <nuxt-img src="/salt.png" alt="Nuxt Logo" loading="lazy" sizes="200px" style="width: 160px;" />
                    </Box>

                    <Box class="mt-6 md:mt-12">
                        <Skew class="bg-white" :delay="600" :animationIn="hasAnimationDone">
                            <HaraitamaheKiyometamahe />
                        </Skew>

                        <p class="tracking-wide break-words whitespace-pre mt-6 md:mt-12">
                            <Skew class="bg-white" :delay="500" :animationIn="hasAnimationDone">
                                {{
                                    $t("各地の海水を汲み上げ精製した塩を配合し、") }}
                            </Skew>

                            <Skew class="bg-white" :delay="550" :animationIn="hasAnimationDone">
                                {{ $t("ココロとカラダの浄化のための") }}
                            </Skew>

                            <Skew class="bg-white" :delay="580" :animationIn="hasAnimationDone">
                                {{ $t("八百万のチカラを宿したバスソルトです。") }}
                            </Skew>

                            <Skew class="bg-white" :delay="600" :animationIn="hasAnimationDone">
                                {{ $t("お好きな神様や神宮の地を選んで、") }}
                            </Skew>

                            <Skew class="bg-white" :delay="640" :animationIn="hasAnimationDone">
                                {{ $t("浄化にお使い下さい。") }}
                            </Skew>
                        </p>
                    </Box>
                </Box>

                <!-- Slide show -->
                <Box class="w-full lg:w-1/2">
                    <Carousel :items-to-show="1" :wrap-around="true" class="w-full">
                        <Slide :key="0">
                            <nuxt-img src="/top.jpg" alt="トップイメージ" style="width: 100%;" sizes="960px" />
                        </Slide>
                        <Slide :key="1">
                            <nuxt-img src="/shimonada.jpg" alt="トップイメージ" style="width: 100%;" sizes="960px" />
                        </Slide>
                        <template #addons>
                            <Navigation />
                            <Pagination />
                        </template>
                    </Carousel>
                </Box>
            </Box>
        </Box>

        <!-- 塩と皿 -->
        <Box class="lg:absolute -ml-12 left-0 bottom-0  -z-10">
            <SaltOnDish />
        </Box>
    </Box>

</template>

<script setup>
defineProps({
    hasAnimationDone: {
        type: Boolean,
        default: false
    },
})
</script>
