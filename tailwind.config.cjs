/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        'xs': '460px',
      },
      fontFamily: {
        sans: ["Gotham SSm A", "sans-serif"],
      },
    },
  },
  plugins: [
    require("tailwindcss-animated"),
    function ({ addComponents,  }) {
      addComponents({
        "h1": {
					"@apply text-[36px] sm:text-[40px]": {},
				},
        "h2": {
					"@apply text-[24px] sm:text-[28px]": {},
				},
        ".container": {
					"@apply w-[87%] mx-auto": {},
				},
      });
    },
  ],
};
