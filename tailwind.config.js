/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#1D1E1Fff",
        primary: "#2E2F2Fff",
        default: "#646465ff",
        button: "#000000ff",
        text: "#E9E9E9ff",
        dark: "#191227ff",
      },
    },
  },
  plugins: [],
};
