/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "hsl(26, 100%, 55%)",
          2: "hsl(25, 100%, 94%)",
        },
        neutral: {
          1: "hsl(220, 13%, 13%)",
          2: "hsl(219, 9%, 45%)",
          3: "hsl(220, 14%, 75%)",
          4: "hsl(223, 64%, 98%)",
        },
      },
      fontFamily: {
        kumbh: ["Kumbh Sans", "system-ui"],
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".container": {
          "@apply w-[90%] mx-auto px-5 md:px-16  xl:w-[80%]": {},
        },
      });
    }),
  ],
};
