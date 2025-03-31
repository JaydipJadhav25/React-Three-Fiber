/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    theme: {
      extend: {
        animation: {
          marquee: "marquee 5s linear infinite",
        },
        keyframes: {
          marquee: {
            from: { transform: "translateX(-100%)" },
            to: { transform: "translateX(100%)" },
          },
        },
      },
    },
  },
  plugins: [],
}

