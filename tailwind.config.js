/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      title: ['"Encode Sans"', "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          10: "#ACD2E5",
          20: "#3887AF",
          DEFAULT: "#024E74",
          40: "#003A57",
          50: "#002A3F",
        },
        secondary: {
          10: "#F4FCFF",
          20: "#F4FCFF",
          DEFAULT: "#EBF8FE",
          40: "#D5EBF5",
          50: "#D5EBF5",
        },
        accent: {
          10: "#AFF9FA",
          20: "#3DD5D6",
          DEFAULT: "#15BEBF",
          40: "#009090",
          50: "#006468",
        },
        error: {
          10: "#FFE7E7",
          20: "#FFBFBE",
          DEFAULT: "#D40300",
          40: "#AB0200",
          50: "#670100",
        },
        warning: {
          10: "#FFE8AE",
          20: "#FFCE4F",
          DEFAULT: "#FFBC10",
          40: "#F2AE00",
          50: "#D09600",
        },
        success: {
          10: "#BFDDB0",
          20: "#63A443",
          DEFAULT: "#2C8300",
          40: "#216400",
          50: "#113200",
        },
        neutral: {
          light: "#E3E1E5",
          DEFAULT: "#FDFDFD",
          dark: "#23292B",
        },
        background: "#F6F6F7",
        strokes: "#E3E1E5",
        default: "#23292B",
        second: "#384145",
      },
    },
  },
  plugins: [],
};
