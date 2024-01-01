/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extends: {
            fontSize: {
                xs: ".75rem",
                sm: ".875rem",
                base: "1rem",
                lg: "1.125rem",
                xl: "1.25rem",
                "2xl": "1.5rem",
                "3xl": "1.875rem",
                "4xl": "2.25rem",
                "5xl": "3rem",
                "6xl": "4rem",
            },
            fontFamily: {
                sans: [
                    "Titillium Web Regular",
                    ...defaultTheme.fontFamily.sans,
                ],
            },
        },
    },
    plugins: [require("@tailwindcss/line-clamp")],
}
