module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: {
      'pink': '#CF2BD0',
      'celeste': '#00EBFE',
      'blueLight': '#01BAD9',
      'blueDark': '#021855',
      'black':'#202035',
     },
     borderColor: {
      'blue': '#AD95FF',
     },
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