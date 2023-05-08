import { type Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                cRed: '#db2f37',
                cBlack: '#212121',
                cGray: '#bcbcbc',
                cBlue: '#5700f9',
                cText: '#db2f37',
                cBG: '#131624',
            },
        },
    },
    plugins: [require('tailwindcss-neumorphism')],
} satisfies Config;
