module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/cover.png')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
