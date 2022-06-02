module.exports = {

  darkmode:'class',
  content: ["./*html"],
  theme: {
    colors : 
      {
        "cblue": "#0000ff",
        'realcyan': "#00ffff",
        'realgray' : '#171717',
        'gred' : '#ff0066'
      },
    extend: {},
  },

  screens: {
    'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
