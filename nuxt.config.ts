// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    devtools: { enabled: true },
    srcDir: 'src',
    typescript: {
        typeCheck: true,
        strict: true,
    },
    components: {
        global: true,
        dirs: [
            '~/components/utils',
            '~/components/pages',
             '~/components',

        ]
    },
    app: {
        head: {
            title: '恋華工房',
            htmlAttrs: { lang: 'ja', prefix: 'og: <https://ogp.me/ns#>' },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: '各地の海水を汲み上げ精製した塩を配合し、バスソルトをはじめとしたココロとカラダの浄化のための八百万のチカラを宿した商品を販売しています。お好きな神様や神宮の地を選んで、浄化にお使い下さい。' },
                { name: 'keywords', content: '恋華工房, バスソルト, 仙酔島, 塩' }
            ],
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Sen&display=swap' },
                { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Zen+Old+Mincho&display=swap" }
            ]
        },
        pageTransition: { name: 'page', mode: 'out-in' },
        baseURL: '/',

    },
    imports: {
        dirs: [
            "./src/components/**",
        ],
    },
    image: {
        format: ['webp'],
        dir: 'assets/images',
    },
    gtag: {
        id: 'G-LSB3VKYC87',
    },
    i18n: {
        locales: ['en', 'ja'],
        defaultLocale: 'ja',
        vueI18n: "./i18n.config.ts"
    },
    modules: [
        '@nuxt/image',
        '@vueuse/nuxt',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
        "vue3-carousel-nuxt",
        "nuxt-gtag"
    ],
    css: ["~/styles/style.scss"],
})
