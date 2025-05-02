// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./App.{js,jsx,ts,tsx}",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                violet: '#C7AADB',
                pink: '#FFEDFB',
                black: '#222222',
                text: '#222222',
                background: '#FFEDFB',
                tint: '#FFEDFB',
                icon: '#C7AADB',
                tabIconDefault: '#C7AADB',
                tabIconSelected: '#FFEDFB',
            },
        },
    },
    plugins: [],
}
