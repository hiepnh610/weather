/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          300: '#303030',
          600: '#101014',
        },
        light: {
          600: '#fafafc',
        },
      },
    },
  },
  plugins: [],
};
