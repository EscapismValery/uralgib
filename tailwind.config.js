/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,html}",
    "./pages/**/*.{js,html}",
    "./*.html",
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          950: '#070b14', // Deep Titanium Obsidian
          900: '#0c1322', // Industrial Graphite
          850: '#111b30', // Surface Dark
          800: '#17233d', // Card Dark
          700: '#233354', // Border / Muted
          600: '#334873',
          500: '#48639c',
          400: '#6d88c2',
          300: '#9cb1de',
          200: '#cbd7f1',
          100: '#e5ecf9',
          50: '#f4f7fc',
        },
        laser: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b', // Laser Amber Primary
          600: '#d97706', // Laser Amber Hover
          700: '#b45309',
        },
        steel: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0284c7', // Steel Blue
          600: '#0369a1',
          700: '#075985',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          'monospace'
        ]
      },
      boxShadow: {
        'glow-laser': '0 0 25px -5px rgba(245, 158, 11, 0.35)',
        'glow-steel': '0 0 25px -5px rgba(2, 132, 199, 0.35)',
        'industrial': '0 10px 30px -10px rgba(7, 11, 20, 0.15)',
        'industrial-lg': '0 20px 40px -15px rgba(7, 11, 20, 0.25)',
      }
    },
  },
  plugins: [],
}

