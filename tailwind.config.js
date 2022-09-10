/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  //purge: [], // to remove unused styles.
  darkMode: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
