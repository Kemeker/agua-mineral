/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue : {
          teste: '#3B82F6'

        }
      }
    },
  },
  plugins: [],
}
