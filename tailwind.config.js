/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': { min: '270px', max: '319.99px' },
        'sm': { min: '320px', max: '599.99px' },
        'smd': { min: '600px', max: '767.99px' },
        'md': { min: '768px', max: '991.99px' },
        'lg': { min: '992px', max: '1191.99px' },
        'xl': { min: '1192px', max: '1367.99px' },
        '2xl': { min: '1368px', max: '1599.99px' },
        '3xl': { min: '1600px' },
      },
    },
  },
  plugins: [],
}

