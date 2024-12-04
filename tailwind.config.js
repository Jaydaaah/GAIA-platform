import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                commissioner: ["Commissioner", "sans-serif"],
                raleway: ['Raleway', 'sans-serif'], 
            },
            colors: {
                background: "#1A1A19",
                neutral: "#31511E",
                secondary: "#859F3D",
                primary: "#F6FCDF",
            },
            blur: {
                xxs: '0.8px',
                xs: '1px'
            }
        },
    },

    plugins: [forms],
};
