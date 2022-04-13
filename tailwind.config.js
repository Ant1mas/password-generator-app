module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
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
  ],
}
