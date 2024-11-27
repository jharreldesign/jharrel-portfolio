/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],  // Using class-based dark mode
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",  // Include TS and TSX if you are using them
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  prefix: "",  // Prefix is optional, you can add one if necessary for your project
  theme: {
    container: {
      center: true,
      padding: "15px",  // Adjust container padding as needed
    },
    screens: {
      sm: "640px",  // Small screen breakpoint
      md: "768px",  // Medium screen breakpoint
      lg: "960px",  // Large screen breakpoint
      xl: "1200px", // Extra large screen breakpoint
    },
    fontFamily: {
      primary: "JetBrains Mono, monospace",  // Replace with fallback font in case CSS variable isn't defined
      secondary: "Roboto, sans-serif",       // Add fallback fonts here too
    },
    extend: {
      colors: {
        primary: "#1e1f22",    // Custom primary color
        secondary: "#2b2d31",  // Custom secondary color
        accent: {
          DEFAULT: "#57ebd7", // Default accent color
          hover: "#45bcac",   // Hover accent color
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // Plugin for animations
};
