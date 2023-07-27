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

        // dbg : '#121212',
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
        }
      },
    },
  plugins: [],
};
