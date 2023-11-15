/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'blue':    '#1ba2f6', 
        'indigo':  '#6610f2',
        'purple':  '#6f42c1',
        'pink':    '#ea39b8',
        'red':     '#e44c55',
        'orange':  '#f1b633',
        'yellow':  '#ffc107', 
        'green':   '#3cf281', 
        'teal':    '#3f81a2', 
        'cyan':    '#32fbe2',
        'dark-purple': '#1a0933',
      }, 
      backgroundImage: {
        'hero-img': "url('/img/jake-hills-23LET4Hxj_U-unsplash.jpg')"
      },
      dropShadow: {
        'text-shadow': '0 0 1px rgba(50, 251, 226, 0.3), 0 0 2px rgba(50, 251, 226, 0.3), 0 0 5px rgba(50, 251, 226, 0.2)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

