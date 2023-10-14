module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  plugins: [
    'prettier-plugin-tailwindcss',
    require.resolve('@trivago/prettier-plugin-sort-imports'),
  ],
  importOrder: [
    '^@/(.*)$',
    'lucide-react',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
