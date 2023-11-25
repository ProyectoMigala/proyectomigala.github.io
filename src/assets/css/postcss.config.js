module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.HUGO_ENVIRONMENT === 'production'
      ? [require('cssnano')({
        preset: 'default',
      })]
      : []
  ]
}
