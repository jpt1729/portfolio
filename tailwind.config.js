/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
				'color-1': '#0B3954',
				'color-2': '#BFD7EA',
				'color-3': '#FF6663',
				'color-4': '#E0FF4F',
				'color-5': '#FEFFFE',
			},
    },
  },
  plugins: [],
}
