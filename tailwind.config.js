/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/*/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./index.html",
],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins, sans-serif'],
        textIndent: {
          '128': '32rem',
        }
      },
      backgroundImage: {
        'hero-pattern': "url('./image/pexels-pavel-danilyuk-5790072 (1080p).mp4')",
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
        gridAutoColumns: {
          'auto-fit': 'repeat(autofit, minmax(250px, 1fr))',
        }

    },
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs"),
    require('flowbite/plugin'),
    
  ],
}

