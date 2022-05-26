module.exports = {
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  content: ["./src/**/*.{html,js}", './src/components/**/*.{html,js}', './src/app.js'
],
  theme: {
    extend: {},
  },
}
