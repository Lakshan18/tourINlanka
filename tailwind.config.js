/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': { max: '424px' },                  // Small phones
        'sm': { min: '425px', max: '767px' },    // Large phones
        'md': { min: '768px', max: '1023px' },   // Tablets
        'lg': { min: '1024px', max: '1365px' },  // Standard laptops
        'xl': { min: '1366px', max: '1919px' },  // Large laptops/desktops
        '2xl': { min: '1920px' }                 // Large monitors
      },
    },
  },
  plugins: [],
}

