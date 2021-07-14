module.exports = {
  purge: ['./src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        gloom: ['Gloom'],
      },
      colors: {
        'gloom-brown': {
          DEFAULT: '#4F281A',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
