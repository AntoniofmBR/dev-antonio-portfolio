/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        background_principal: '#080708',
        background_secondary: '#212529',
        green_base: '#16DB65',
        gray_light: '#6C757D',
        gray_dark: '#343a40',
        text_base: '#FFFFFF',
        bg_card: '#262626',
        link_button_project: '#4361EE',
        link_button_project_hover: '#3f37c9',
        link_button_github: '#141414',
        link_button_github_hover: '#000',
        focus: '#FFFCF2',
      },
    },
  },
  plugins: [],
}
