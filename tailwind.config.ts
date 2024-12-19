import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        'customsize': '11px', // Add custom font size here
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Use Poppins as the default sans-serif font
        calistoga: ['Calistoga', 'sans-serif'],
        serif: ['Quattrocento Sans', 'sans-serif'],
      },

      screens: {
        'xs': '320px',  // Custom breakpoint for extra small devices
        'sm': '640px',  // Small screen (default)
        'md': '768px',  // Medium screen
        'lg': '1024px', // Large screen
        'xl': '1280px', // Extra large screen
        '2xl': '1536px', // Extra-extra-large screen
      },
      
      
    },
  },
  
  plugins: [],
} satisfies Config;
