/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        '5': '20px',
        '17px' : '17px',
        '8.25': '33px',
        '135' : '135px',
        '103' : '103px',
      },
      height: {
        '1px': '1px',
      },
      fontSize: {
        '64px': '64px',
      },
    },
  },
  plugins: [],
};
