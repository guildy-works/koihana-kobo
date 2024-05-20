import type { Config } from "tailwindcss"

const config: Config = {
    content: ["./**/*.vue"],
    theme: {
        screens: {
            sm: '600px',
            md: '1240px',
            lg: '1560px',
            xl: '1920px',
        },
        fontFamily: {
            sans: ['Zen Old Mincho', 'sans-serif'],
            serif: ['Zen Old Mincho', 'sans-serif'],
            body: "sans",
        },
        colors: {
            color1: '#103132',
            color2: '#617b7d',
            color3: '#176e81',
            color4: '#24989f',
            color5: '#6cb9be',
            color6: '#b6d1d1',
            color7: '#e1e7e7',
            white: '#ffffff',
        },
    },
    plugins: [],
}

export default config
