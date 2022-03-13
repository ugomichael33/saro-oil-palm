module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '340px',
      // => @media (min-width: 340px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "hero-img": 'url("./components/assets/palmfruit.png")',
        "logo-img": 'url("./components/assets/logo.jpg")',
        "heap-bg": 'url("./components/assets/palmheap.png")',
        "kernal-bg": 'url("./components/assets/palmkernal.jpg")',
        "worker-img": 'url("./components/assets/worker.png")',
        "palmoil-img": 'url("./components/assets/palmoil.png")',
        "dark-green": "#275A53"
      }
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}
