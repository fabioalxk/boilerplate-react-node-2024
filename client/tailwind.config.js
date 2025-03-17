/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: {
        //   50: '#eef2ff',
        //   100: '#e0e7ff',
        //   200: '#c7d2fe',
        //   300: '#a5b4fc',
        //   400: '#818cf8',
        //   500: '#6366f1',
        //   600: '#4f46e5',
        //   700: '#4338ca',
        //   800: '#3730a3',
        //   900: '#312e81',
        //   950: '#1e1b4b',
        // },
        // secondary: {
        //   50: '#f0f9ff',
        //   100: '#e0f2fe',
        //   200: '#bae6fd',
        //   300: '#7dd3fc',
        //   400: '#38bdf8',
        //   500: '#0ea5e9',
        //   600: '#0284c7',
        //   700: '#0369a1',
        //   800: '#075985',
        //   900: '#0c4a6e',
        //   950: '#082f49',
        // },
        // neutral: {
        //   50: '#f9fafb',
        //   100: '#f3f4f6',
        //   200: '#e5e7eb',
        //   300: '#d1d5db',
        //   400: '#9ca3af',
        //   500: '#6b7280',
        //   600: '#4b5563',
        //   700: '#374151',
        //   800: '#ffffff',
        //   900: '#111827',
        //   950: '#030712',
        // }
      },
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
        display: ['Inter var', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
} 