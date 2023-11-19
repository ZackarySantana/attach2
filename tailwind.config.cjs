const plugin = require("tailwindcss/plugin");

const themes = ["light-fire"];

/** @type {import('tailwindcss').Config}*/
const config = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            colors: {
                "light-attach-accent": "#4ea8ed",
                "dark-attach-accent": "#446f9a",
                "light-fire": {
                    "attach-accent": "#446f9a",
                    "text-primary": "#000000",
                    "text-secondary": "#ffffff",
                    "text-chip": "#ffffff",
                    bg: "#ffffff",
                    "bg-primary": "#f3f4f6",
                    "bg-secondary": "#d04952",
                    "bg-chip": "#d04952",
                    accent: "#d04952",
                },
            },
            height: {
                item: "60px",
            },
        },
    },
    plugins: [
        plugin(function ({ addUtilities, theme }) {
            themes.forEach((t) => {
                addUtilities({
                    [`.${t} .text-attach-accent`]: {
                        color: theme(`colors.${t}.attach-accent`),
                    },
                    [`.${t} .text-primary`]: {
                        color: theme(`colors.${t}.text-primary`),
                    },
                    [`.${t} .text-secondary`]: {
                        color: theme(`colors.${t}.text-secondary`),
                    },
                    [`.${t} .text-chip`]: {
                        color: theme(`colors.${t}.text-chip`),
                    },
                    [`.${t} .fade-line`]: {
                        maskImage: `linear-gradient(90deg, currentColor 75%, transparent 90%)`,
                    },
                    [`body:has(.${t})`]: {
                        backgroundColor: theme(`colors.${t}.bg`),
                        color: theme(`colors.${t}.text-primary`),
                    },
                    [`.${t} .bg`]: {
                        backgroundColor: theme(`colors.${t}.bg`),
                    },
                    [`.${t} .bg-primary`]: {
                        backgroundColor: theme(`colors.${t}.bg-primary`),
                    },
                    [`.${t} .bg-secondary`]: {
                        backgroundColor: theme(`colors.${t}.bg-secondary`),
                    },
                    [`.${t} .bg-chip`]: {
                        backgroundColor: theme(`colors.${t}.bg-chip`),
                    },
                    [`.${t} .fill-accent`]: {
                        fill: theme(`colors.${t}.accent`),
                    },
                });
            });
        }),
    ],
};

module.exports = config;
