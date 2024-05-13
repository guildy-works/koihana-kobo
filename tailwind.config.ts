import type { Config } from "tailwindcss"

const config: Config = {
    content: ["./**/*.vue"],
    theme: {
        screens: {
            sm: '600px',
            md: '960px',
            lg: '1240px',
            xl: '1440px',
        },
        fontFamily: {
            sans: ['Noto Sans JP', 'sans-serif'],
        },
        colors: {
            color1: '#103132',
            color2: '#617b7d',
            color3: '#176e81',
            color4: '#24989f',
            color5: '#6cb9be',
            color6: '#b6d1d1',
            color7: '#e1e7e7',
        },
    },
    plugins: [],
}

export default config
