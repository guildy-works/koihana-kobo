// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    devtools: { enabled: true },
    srcDir: 'src',
    typescript: {
        typeCheck: true,
        strict: true,
    },
    app: {
        head: {
            htmlAttrs: { lang: 'ja', prefix: 'og: <https://ogp.me/ns#>' },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'robots', name: 'robots', content: 'noindex' }
            ],
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Sen&display=swap' }
            ]
        },
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
    i18n: {
        locales: ['en', 'ja'],
        defaultLocale: 'ja',
        vueI18n: "./i18n.config.ts"
    },
    modules: [
        '@nuxt/image',
        '@vueuse/nuxt',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n'
    ],
})
