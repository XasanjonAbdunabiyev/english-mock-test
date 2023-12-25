/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontSize: {
            xs: ["1.2rem", { lineHeight: "1.6rem" }],
            sm: ["1.4rem", { lineHeight: "2rem" }],
            base: ["1.4rem", { lineHeight: "2.4rem" }],
            lg: ["1.6rem", { lineHeight: "2.8em" }],
            xl: ["2rem", { lineHeight: "2.8rem" }],
            "2xl": ["2.4rem", { lineHeight: "3.2rem" }],
            "3xl": ["3rem", { lineHeight: "3.6rem" }],
            "4xl": ["3.6rem", { lineHeight: "4rem" }],
            "5xl": ["4.8rem", { lineHeight: "1" }],
            "6xl": ["6rem", { lineHeight: "1" }],
            "7xl": ["7.2rem", { lineHeight: "1" }],
            "8xl": ["9.6rem", { lineHeight: "1" }],
            "9xl": ["12.8rem", { lineHeight: "1" }],
            10: ["1rem"],
            11: ["1.1rem"],
            12: ["1.2rem"],
            13: ["1.3rem"],
            14: ["1.4rem"],
            15: ["1.5rem"],
            16: ["1.6rem"],
            17: ["1.7rem"],
            18: ["1.8rem"],
            19: ["1.9rem"],
            20: ["2rem"],
            24: ["2.4rem"],
            28: ["2.8rem"],
            32: ["3.2rem"],
            36: ["3.6rem"],
            40: ["4rem"],
            44: ["4.4rem"],
            48: ["4.8rem"],
            52: ["5.2rem"],
            56: ["5.6rem"],
            60: ["6rem"],
            64: ["6.4rem"],
            68: ["6.8rem"],
            72: ["7.2rem"],
            96: ["9.6rem"],
            128: ["12.8rem"],
        },
        extends: {
            fontFamily: {
                'sans': ['Titillium Web Regular', ...defaultTheme.fontFamily.sans]
            }
        }
    },
    plugins: [],
}
