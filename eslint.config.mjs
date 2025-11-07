import eslintConfig from '@oliver139/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'

export default eslintConfig(
  { vue: true },
  ...tailwind.configs['flat/recommended'],
).append(
  {
    name: 'tailwindcss:overrides',
    rules: {
      'tailwindcss/no-custom-classname': 'off',
    },
  },
)
