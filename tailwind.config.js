/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#004838",
        accent: "#E2FB6C",
        header: "#073127",
        body: "#333F3C",
        card: "#EBEDE8",
        background: "#FFFFFF",
        ticker: {
          loss: "#FF0000",
          gain: "#004838",
          stable: "#333F3C",
        },
        priority: {
          medium: "#D97706",
          low: "#6B7280",
        },
        market: {
          hot: "#FF6B35",
          growing: "#10B981",
        },
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
