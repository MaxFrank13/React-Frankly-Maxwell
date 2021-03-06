module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '50p': "50%",
      },
      boxShadow: {
        'rounded': 'inset 0 0 5px 2px #E3F8FFAA',
        'pressed': 'inset 0 0 5px 2px #0B69A377'
      },
      backgroundImage: {
        'radial': 'radial-gradient(circle, rgba(3,83,136,1) 0%, rgba(255,243,196,1) 24%, rgba(240,180,41,1) 100%)'
      },
      screens: {
        'xs': '540px',
      },
      colors: {
        'sky': {
          50: '#E3F8FF',
          100: '#B3ECFF',
          200: '#81DEFD',
          300: '#5ED0FA',
          400: '#40C3F7',
          500: '#2BB0ED',
          600: '#1992D4',
          700: '#127FBF',
          800: '#0B69A3',
          900: '#035388',
        },
        'yellow': {
          50: '#FFFBEA',
          100: '#FFF3C4',
          200: '#FCE588',
          300: '#FADB5F',
          400: '#F7C948',
          500: '#F0B429',
          600: '#DE911D',
          700: '#CB6E17',
          800: '#B44D12',
          900: '#8D2B0B',
        },
        'stone': {
          50: '#F7F7F7',
          100: '#E1E1E1',
          200: '#CFCFCF',
          300: '#B1B1B1',
          400: '#9E9E9E',
          500: '#7E7E7E',
          600: '#626262',
          700: '#515151',
          800: '#3B3B3B',
          900: '#222222',
        },
        'danger': {
          50: '#FFE3E3',
          100: '#FFBDBD',
          200: '#FF9B9B',
          300: '#F86A6A',
          400: '#EF4E4E',
          500: '#E12D39',
          600: '#CF1124',
          700: '#AB091E',
          800: '#8A041A',
          900: '#610316',
        },
      }
    },
  },
  plugins: [],
}
