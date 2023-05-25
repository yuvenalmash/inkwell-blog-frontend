module.exports = {
  mode: 'jit',
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    screen: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  variants: {
    extend: {},
  },
  plugins: [],
};
