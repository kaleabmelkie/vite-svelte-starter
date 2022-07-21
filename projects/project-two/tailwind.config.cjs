/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,svelte}',
    '../shared/**/*.{html,svelte}',

    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
    '../../node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
  ],

  theme: {
    extend: {}
  },

  plugins: [require('flowbite/plugin')]
};
