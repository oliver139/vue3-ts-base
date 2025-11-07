import type { Config } from 'tailwindcss'
import PrimeUI from 'tailwindcss-primeui'
import colors from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    transitionDuration: {
      DEFAULT: '300ms',
    },
    transitionTimingFunction: {
      DEFAULT: 'ease',
    },
    extend: {
      backgroundColor: {
        none: 'transparent',
      },
      colors: {
        primary: 'var(--p-primary-color)',
        black: 'var(--p-surface-800)',
        success: colors.green[700],
        error: colors.red[700],
        fail: colors.red[700],
      },
      screens: {
        ssm: '576px',
        sssm: '480px',
      },
      transitionProperty: {
        font: 'color, font-size, font-weight, text-align',
        opacity: 'opacity, visibility',
        'hidden-rows': 'opacity, visibility, grid-template-rows',
      },
      zIndex: {
        loading: '3000',
      },
    },
  },
  plugins: [
    PrimeUI,
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'grid-col-auto-fill': value => ({
            gridTemplateColumns: `repeat(auto-fill, minmax(min(${value}, 100%), 1fr))`,
          }),
          'grid-col-auto-fit': value => ({
            gridTemplateColumns: `repeat(auto-fit, minmax(min(${value}, 100%), 1fr))`,
          }),
        },
        {
          values: theme('width', {}),
        },
      )
    }),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          pxt: value => ({
            'padding-top': value,
            'padding-left': value,
            'padding-right': value,
          }),
          pxb: value => ({
            'padding-bottom': value,
            'padding-left': value,
            'padding-right': value,
          }),
          pyl: value => ({
            'padding-top': value,
            'padding-bottom': value,
            'padding-left': value,
          }),
          pyr: value => ({
            'padding-top': value,
            'padding-bottom': value,
            'padding-right': value,
          }),
        },
        {
          values: theme('padding', {}),
        },
      )
    }),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          mxt: value => ({
            'margin-top': value,
            'margin-left': value,
            'margin-right': value,
          }),
          mxb: value => ({
            'margin-bottom': value,
            'margin-left': value,
            'margin-right': value,
          }),
          myl: value => ({
            'margin-top': value,
            'margin-bottom': value,
            'margin-left': value,
          }),
          myr: value => ({
            'margin-top': value,
            'margin-bottom': value,
            'margin-right': value,
          }),
        },
        {
          values: theme('margin', {}),
        },
      )
    }),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.outline-default': {
          outline: '2px solid var(--p-primary-color)',
          'outline-offset': '2px',
        },
      })
    }),
  ],
} satisfies Config
