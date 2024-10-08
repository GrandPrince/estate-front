/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        'landingContentWidth': 'calc(100vw - 2px)', // Adjust this value as needed
        ShssItem: 'calc(100vw - 3rem)',
        'SearchItem': 'calc(100vw - 5rem)'
      },
      maxWidth: {
        iPhoneHead: 'calc(100vw - 4rem)',
        // '8xl': '96rem',
      },
      boxShadow: {
        "searchBoxInput":"inset 0 3.11px 3.11px rgba(61, 61, 61, 0.2)",
        "searchBoxInput-MD":"inset 0 5.51px 5.51px rgba(61, 61, 61, 0.2)",
        'searchBoxBtn': '0 1.37px 2.74px rgba(0, 0, 0, 0.1)',
        'searchBoxBtn-MD': '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      height: {
        'landingContentWidthHeight': 'calc(100vh - 2px)', // Adjust this value as needed
        'verticalTimeLine': 'calc(100vh - 200px)',
      },
      backgroundImage: {
        "landingBorderGradient": 'linear-gradient(to bottom right, rgba(255,255,255,0.4), rgba(255,255,255,0) 50%, rgba(255,255,255,0.1) 100%)',
        "searchBtnGradient": 'linear-gradient(to bottom right,  rgba(255,255,255,1) 0%,rgba(32, 215, 149, 1) 15%, rgba(20, 87, 101, 1) 100%)',
        'searchCaptionGradient': 'linear-gradient(to bottom right, rgba(255,255,255,1) 0%,rgba(32, 215, 149, 1) 30%, rgba(20, 87, 101, 1) 120%)',
        'greenGradient': 'linear-gradient(to right, rgba(32, 215, 149, 1), rgba(20, 87, 101, 1) 90%)',
      },
      spacing: {
        'building': '8rem', // Example default value
      },
      colors: {
        autoScrollBtn: 'rgba(180,180,180,1)', // Replace with your desired color code
        iPhoneCardBorder: 'rgba(255,255,255,0.4)',
        primary: {
          light: '#3b82f6', // Light primary color
          DEFAULT: '#20D795', // Default primary color
          dark: '#20D795', // Dark primary color
        },
      },
      screens: {
        // xl: '1312px',
      },
      fontFamily: {
        sans: ['Euclid Galactic', 'ui-sans-serif', 'system-ui', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        carousel: ['Nothing You Could Do'],
        montserrat: ['montserrat']
      },
      margin: {
        half: "-40rem",
        "sm-total": "-85%",
        "xs-total": "-78%",
      }
    },
    backgroundColor: (theme) => ({
      default: "rgba(21,21,21,1)",
      landing: "rgba(39, 39, 39, 0.3)",
      landingBack: "rgb(27,27,27)",//LandingContentBackColor
      videoTimeLineBack: "rgba(217,217,217, 0.5)",  //Progressbar of Video (Back Color)
      videoTimeLineActive: "rgba(32,215,149,1)", //ProgressBar of the Video (Progress Color)
      borderTopLeft: "rgba(255,255,255,0.4)",
      borderBottomRight: "rgba(255,255,255,0,8)",
      btnBuildingBack: "rgba(128, 128, 128, 0.5)", //Building Button Background Color
      primary: '#20D795',
      secondary: 'white',
    }),
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.search-caption-text': {
            'background-clip': 'text',
            '-webkit-background-clip': 'text',
          },
        },
        ['responsive', 'hover']
      );
    },
  ],
}