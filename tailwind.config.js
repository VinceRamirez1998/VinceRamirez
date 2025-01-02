/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkbg: "#030712",
      },
      fontSize: {
        customsize: "11px", // Add custom font size here
        techstacks: "12px", // Add custom font size here
      },
      width: {
        customwidth: "var(--customwidth)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Use Poppins as the default sans-serif font
        serif: ["Quattrocento Sans", "sans-serif"],
        calistoga: ["Calistoga", "sans-serif"],
      },
      fontWeight: {
        "extra-light": 600, // Custom weight
        "extra-bold": 800, // Custom weight
      },
      letterSpacing: {
        tighter: ".065em", // Custom class for .025em letter-spacing
      },
      screens: {
        xs: "320px", // Custom breakpoint for extra small devices
        sm: "640px", // Small screen (default)
        md: "768px", // Medium screen
        lg: "1024px", // Large screen
        xl: "1280px", // Extra large screen
        "2xl": "1536px", // Extra-extra-large screen
      },
    },
  },
  plugins: [],
};
