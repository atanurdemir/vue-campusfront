module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px",
    },
    extend: {
      colors: {
        "regal-gray": "#5e738b",
        "regal-blue": "#337ab7",
        "campus-gray": "#f5f5f5",
        "campus-blue": "#263591",
        "campus-green": "#36c6d3",
        "campus-navyblue": "#2E4271",
        "campus-background": "#eef2f7",
      },
      fontFamily: {
        body: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
