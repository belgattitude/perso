// @ts-check

import defaultTheme from 'tailwindcss/defaultTheme';
import sharedTheme from './src/themes/tailwind/tailwind.theme';
import { tailwindV3Colors } from './src/themes/shared/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    '../../node_modules/flowbite-react/**/*.js}',
  ],
  theme: {
    screens: {
      ...defaultTheme.screens,
    },
    colors: {
      ...tailwindV3Colors,
      bermuda: '#78dcca',
      tahiti: {
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
      },
    },
    fontFamily: {
      sans: sharedTheme.fontFamily.sans,
      serif: sharedTheme.fontFamily.serif,
      mono: [...defaultTheme.fontFamily.mono],
    },
    extend: {
      /**
      spacing: {
        128: '32rem',
      },
      */
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
  ],
};
