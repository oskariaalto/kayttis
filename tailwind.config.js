/** @type {import('tailwindcss').Config} */

const colorTheme = {
  brownVanilla : {
    colors: {
    'background': '#2E1004' //dark brown
    ,
    'primary': '#E7D79F' // vanilla
    ,
    'secondary': '#D05A05' // light-brown
    ,
    'site': '#E7D79F' // vanilla
    }
  },
  redBlue: {
    colors: {
      'background': '#0C042E' //dark blue
      ,
      'primary': '#A80C28' // crimson
      ,
      'secondary': '#E7E6E8' // white
      ,
      'site': '#312C66' // light-blue
      }
  }
}
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:
        colorTheme.brownVanilla.colors
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}