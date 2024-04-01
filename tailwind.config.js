/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-input': "url(/banner-input.svg)",
        'banner-boost': "url(/banner-boost.svg)",
      }
    },
  },
  plugins: [],
}

