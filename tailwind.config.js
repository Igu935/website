/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
        dropShadow: {
            'imgShadow': '7px -7px 0px #F5C003',
        },
        boxShadow: {
            'btn': '0px 0px 5.8px 0px #F5C003',
            'btnProject': '0px 0px 5.8px 0px #121212'
        }
    }
},
  plugins: [],
}

