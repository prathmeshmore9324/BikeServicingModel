/** @type {import('tailwindcss').Config} */ 
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#304771',     // Deep navy blue
        secondary: '#E9EEF6',   // Light blue-gray
        accent: '#F0B67F',      // Warm orange accent
        text: '#2A3342',        // Dark slate
        subText: '#778499',     // Medium blue-gray
        footer: '#1C2B46',      // Dark navy
        success: '#3ECF8E',     // Green for success states
        warning: '#FFBB38',     // Amber for warnings
        error: '#E53E3E',       // Red for errors
        background: '#F9FAFB',  // Very light gray for backgrounds
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontSize: {
        'xs': '0.75rem',      // 12px
        'sm': '0.875rem',     // 14px
        'base': '1rem',       // 16px
        'lg': '1.125rem',     // 18px
        'xl': '1.25rem',      // 20px
        '2xl': '1.5rem',      // 24px
        '3xl': '1.875rem',    // 30px
        '4xl': '2.25rem',     // 36px
        '5xl': '3rem',        // 48px
      },
      spacing: {
        '18': '4.5rem',       // 72px
        '72': '18rem',        // 288px
        '84': '21rem',        // 336px
        '96': '24rem',        // 384px
      },
      borderRadius: {
        'sm': '0.125rem',     // 2px
        'md': '0.375rem',     // 6px
        'lg': '0.5rem',       // 8px
        'xl': '1rem',         // 16px
      },
      boxShadow: {
        'card': '0 2px 4px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
        'dropdown': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'button': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
    },
  },
  plugins: [],
}