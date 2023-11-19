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
                    "bg-secondary": "#e23a4d",
                    "bg-chip": "#e23a4d",
                    accent: "#e23a4d",
                    "accent-2": "#e23a4d",
                },
            },
            height: {
                item: "60px",
            },
            width: {
                item: "calc(100%-25px)",
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
                    [`.${t} .bg-accent`]: {
                        backgroundColor: theme(`colors.${t}.accent`),
                    },
                    [`.${t} .fill-accent`]: {
                        fill: theme(`colors.${t}.accent`),
                    },
                    [`.${t} .from-accent`]: {
                        "--tw-gradient-from": theme(`colors.${t}.accent`),
                        "--tw-gradient-stops":
                            "var(--tw-gradient-from), var(--tw-gradient-to)",
                    },
                    [`.${t} .to-accent-2`]: {
                        "--tw-gradient-to": theme(`colors.${t}.accent-2`),
                        "--tw-gradient-stops":
                            "var(--tw-gradient-from), var(--tw-gradient-to)",
                    },
                });
            });
        }),
    ],
};

module.exports = config;
