/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700', // Yellow
        'primary-dark': '#DAA520', // Darker Yellow
        secondary: '#FF4500', // Red/OrangeRed
        'text-primary': '#2C2C2C', // Dark Gray for readability
        'text-secondary': '#666666', // Lighter Gray
        'bg-primary': '#FFFFFF', // White
        'bg-secondary': '#F5F5F5', // Very Light Gray for subtle contrast
        border: '#E0E0E0', // Light Gray border
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
