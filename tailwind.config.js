export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-cyan": "hsl(180, 66%, 49%)",
        "custom-gray": "hsl(0, 0%, 75%)",
        "dark-blue": "hsl(255, 11%, 22%)",
        "custum-cyan": "hsl(180, 66%, 49%)",
        "gray-voilet": "hsl(257, 7%, 63%)",
        "dark-voilet": "hsl(257, 27%, 26%)",
        "dark-voilet-100": "hsl(260, 8%, 14%)",
      },
      backgroundImage: {
        "boast-pattern": "url('/src/assets/bg-boost-desktop.svg')",
        "shorten-desktop": "url('/src/assets/bg-shorten-desktop.svg')",
        "shorten-mobile": "url('/src/assets/bg-shorten-mobile.svg')",
      },
    },
  },
  plugins: [],
};
