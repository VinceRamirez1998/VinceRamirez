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
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Use Poppins as the default sans-serif font
        calistoga: ['Calistoga', 'sans-serif'],
        serif: ['Quattrocento Sans', 'sans-serif'],
      },

      screens: {
        // Custom breakpoints (optional)
        sm: '640px', // Small screens (mobile)
        md: '768px', // Medium screens (tablet, small laptop)
        lg: '1024px', // Large screens (laptops, desktops)
        xl: '1280px', // Extra large screens (large desktops)
        '2xl': '1536px', // 2XL screens (ultra-large displays)
      },
      
      
    },
  },
  
  plugins: [],
} satisfies Config;
