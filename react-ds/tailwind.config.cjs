/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    //Arquivos de conteúdo que têm classes do tailwind
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
