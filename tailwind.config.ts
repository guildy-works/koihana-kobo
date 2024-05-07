import type { Config } from "tailwindcss"

const config: Config = {
    content: ["./**/*.vue"],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
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
