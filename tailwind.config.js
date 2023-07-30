/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary:{
          300: '#9F6FA9',
          100: '#E4D2E8',
          200: '#C4A1CC',
          400: '#82488F',
          500: '#652772',
        },
        secondary:{
            300: '#8B77AF',
            100: '#DCD5EA',
            200: '#B5A7CF',
            400: '#685094',
            500: '#482E76',
        },
        dbg : '#292A2DFF',
        dbgLighter : '#35363b',
        lbg : '#F1F3F4FF',
        lbgDarker : '#E5E7E9FF',
        accent: {
          300: '#DB8EAD',
          100: '#F6DDE7',
          200: '#EAB8CC',
          400: '#BA5C82',
          500: '#953159',
          dark: '#E4A9BC',
        },
        onAccent: 'white',
        onPrimary: 'white',
        onSecondary: 'white',
        onLBackground: '#652772',
        onDBackgroundImportant: 'rgba(255,255,255,0.87)',
        onDBackgroundCasual: 'rgba(255,255,255,0.6)',
        onDBackgroundDisabled: 'rgba(255,255,255,0.38)',

        // Structure générale que je propose :
        // lm: {
        //   primary: {
        //     normal: '',
        //     lighter: '',},
        //   bg: {
        //     normal: '',
        //     darker: '',},
        //   secondary: '',
        //      textColor: '',
        //      textOnAccent: 'lm-bg-normal',
        // },
        // dm: {
        //   primary: {
        //     normal: 'lm-primary-normal',
        //     darker: '',},
        //   bg: {
        //     normal: 'lm-textColor',
        //     lighter : '',},
        //   secondary: '',
        //   textColor: 'lm-bg-normal',
        //   textOnAccent: 'dm-bg-normal',
        // },

        lmt : '#8BC34A',

        lm: {
          primary: {
            normal: 'rgb(207, 159, 218)',
            lighter: '#efeaf2',},
          bg: {
            normal: 'rgb(251, 248, 252)',
            darker: '#ecf0ed',},
          secondary: 'rgb(234, 205, 209)',
          accent:'rgb(166, 68, 86)',
          textColor: 'rgb(29, 14, 32)',
          textOnAccent: 'theme(colors.lm.bg.normal)',
        },
        dm: {
          primary: {
            normal: 'theme(colors.lm.primary.normal)',
            darker: '#402b46',},
          bg: {
            normal: 'theme(colors.lm.textColor)',
            lighter : '#281a2a',},
          secondary: '#16090b',
          accent:'#dba8b1',
          textColor: 'theme(colors.lm.bg.normal)',
          textOnAccent: 'theme(colors.lm.textColor)',
        },


        }
      },
    },
  plugins: [],
};
