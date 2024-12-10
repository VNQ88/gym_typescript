import type { Config } from 'prettier'
import * as prettierPluginTailwindcss from 'prettier-plugin-tailwindcss'

const config: Config = {
  plugins: [prettierPluginTailwindcss],
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  printWidth: 80,
}

export default config