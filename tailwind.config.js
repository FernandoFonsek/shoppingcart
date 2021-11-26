module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: {
      'pink': '#CF2BD0',
      'celeste': '#00EBFE',
      'blueLight': '#01BAD9',//230352
      // 'blueDark': '#021855',
      'blueDark': '#230352',
      'black':'#202035',
      'black-alpha': 'rgba(0,0,0,0.80)'
     },
     borderColor: {
      'blue': '#AD95FF',
     },
     backgroundImage: {
      // 'hero-pattern': "url('/img/hero-pattern.svg')",
      'footer-texture' : "url('/src/assets/bg.png')",
     }
    //  height: {
    //   sm: '8px',
    //   md: '16px',
    //   lg: '24px',
    //   xl: '48px',
    //   per:'273px'
    //  }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}