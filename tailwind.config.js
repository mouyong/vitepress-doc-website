/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    '../*.md',
    '../**/*.md',
    '.vitepress/theme/components/*.vue',
    '.vitepress/theme/styles/*.scss',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
