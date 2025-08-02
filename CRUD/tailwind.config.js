/** @type {import('tailwindcss').Config} */
export default {
  //isi content css file ke load dimana aja
  content: [ 
    './index.html',
    './src/**/*.{jsx,js}' // dalam folder src dan namafilenya jsx
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

