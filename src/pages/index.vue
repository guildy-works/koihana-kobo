<template>
    <Box wrap direction="horizontal" class="min-h-lvh p-4 sm:p-8 md:p-24 min-sm:flex-col-reverse">
        <Box class="w-full sm:w-1/2 sm:h-full" align="center">

            <Box class="max-w-sm">
                <Box class="">
                    <Box align="center">
                        <nuxt-img src="/salt.png" alt="Nuxt Logo" loading="lazy" sizes="200px" style="width: 160px;" />
                    </Box>
                    <Box class="mt-6 md:mt-12">
                        <HaraitamaheKiyometamahe />
                    </Box>
                </Box>
                <Box class="mt-6 md:mt-12">
                    <p class="text-sm tracking-wide">
                        {{ $t("ココロとカラダの浄化のための、") }}<br /><br />
                        {{ $t("八百万のチカラを宿した天日塩バスソルトです。") }}<br /><br />
                        {{ $t("お好きな神様や神宮の地を選んで、") }}<br /><br />
                        {{ $t("浄化にお使い下さい。") }}
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

                <nuxt-img src="/sea1.png" alt="Nuxt Logo" loading="lazy" style="width: 100%;" />
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
