/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkbg: '#030712',
      },
      width: {
        'customwidth': 'var(--customwidth)',  
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Use Poppins as the default sans-serif font
        calistoga: ['Calistoga', 'sans-serif'],
      },
      fontWeight: {
        'extra-light': 600, // Custom weight
        'extra-bold': 800,  // Custom weight
      },
      letterSpacing: {
        tighter: '.065em', // Custom class for .025em letter-spacing
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
}
