/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        xs: "460px",
      },
      fontFamily: {
        sans: ["Gotham SSm A", "sans-serif"],
      },
      fontSize: {
        xs: "10px",
        sm: "12px",
        base: "14px",
        md: "16px",
        lg: "18px",
        xl: "21px",
      },
    },
  },
  plugins: [
    require("tailwindcss-animated"),
    function ({ addComponents }) {
      addComponents({
        h1: { "@apply text-[36px] sm:text-[40px] font-medium": {} },
        h2: { "@apply text-[24px] sm:text-[28px] font-medium": {} },
        h3: { "@apply text-[20px] sm:text-[24px] font-medium": {} },
        h4: { "@apply text-[14px] sm:text-[16px] font-bold": {} },
        ".container-xs": { "@apply w-[95%] mx-auto max-w-[1344px]": {} },
        ".container-sm": { "@apply w-[91%] mx-auto max-w-[1120px]": {} },
        ".container": { "@apply w-[87%] md:w-[80%] mx-auto max-w-[1120px]": {} },
        ".flex-center": { "@apply flex items-center justify-center": {} },
        '[class*="animate-delay"]': { "@apply animate-fade-up animate-duration-500": {} },
        body: { "@apply text-base": {} },
        ".btn-dark": {
          "@apply w-full sm:w-[264px] h-[40px] flex-center rounded font-medium text-white bg-[#171A20] hover:bg-[#171a20de] transition-colors duration-300":
            {},
        },
        ".btn-dark--outline": {
          "@apply w-full sm:w-[264px] h-[40px] flex-center rounded border-[3px] border-[#171a20] font-medium text-black hover:bg-[#171a20] hover:text-white transition-colors duration-300":
            {},
        },
        ".btn-dark--blur": {
          "@apply w-full sm:w-[264px] h-[40px] flex-center rounded font-medium text-white bg-[rgba(23,_26,_32,_0.8)] hover:bg-[#171A20] transition-colors duration-300":
            {},
        },
        ".btn-gray": {
          "@apply w-full sm:w-[264px] h-[40px] flex-center rounded font-medium text-[#393c41] bg-[#f4f4f4] hover:bg-[#EEEEEE] transition-colors duration-300":
            {},
        },
        ".btn-light": {
          "@apply w-full sm:w-[264px] h-[40px] flex-center rounded font-medium text-black bg-white hover:bg-[#e2e3e3] transition-colors duration-300":
            {},
        },
        ".btn-light--blur": {
          "@apply w-full sm:w-[264px] h-[40px] flex-center rounded font-medium bg-[rgba(244,_244,_244,_0.65)] text-[#393c41] hover:bg-white hover:text-black transition-colors duration-300":
            {},
        },
        ".btn-light--outline": {
          "@apply w-full sm:w-[264px] h-[40px] flex-center rounded border-[3px] font-medium text-white border-white hover:bg-white hover:text-black transition-colors duration-300":
            {},
        },
      });
    },
  ],
};
