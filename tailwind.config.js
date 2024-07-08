/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'principal-color': '#f5f5f5',
        'secondary-color': '#0032f7',
        'tertiary-color': '#000d41',
        'yellow-pacman': '#ffe737',
        'red-pacman': '#d03e19',
        'pink-pacman': '#ea82e5',
        'blue-pacman': '#46bfee',
        'orange-pacman': '#db851c',
      },
    },
  },
  plugins: [],
}
