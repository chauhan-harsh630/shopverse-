/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#d1fae5', // emerald-100
          DEFAULT: '#34d399', // emerald-400
          dark: '#059669', // emerald-600
        },
        background: '#f9fafb', // gray-50
        surface: '#ffffff',
        text: {
          main: '#1f2937', // gray-800
          muted: '#6b7280', // gray-500
        },
        border: '#e5e7eb', // gray-200
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
