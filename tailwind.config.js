/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '32px',
        '5xl': '40px',
        '6xl': '48px',
      },
      colors: {
        dark: {
          300: '#303030',
          800: '#1e1e1e',
          900: '#101014',
        },
        light: {
          600: '#fafafc',
        },
        'pale-blue': {
          300: '#bbd8ec',
          600: '#adcade',
        },
      },
    },
  },
  plugins: [],
};
