module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/plugins/**/*.{js,ts,jsx,tsx}",
    "./lib/functions/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#6a91f0',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('./lib/plugins/tailwindcss/scrollbar.js'),
  ],
}
