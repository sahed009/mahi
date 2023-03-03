/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"],
	mode: "jit",
	theme: {
		extend: {
			colors: {
				blue: "#2CBCE9",
				yellow: "#FFDA22",
				grey: "#ededed",
                green: "#004F2D",
				"dark-grey": "#757575",
				"opaque-black": "rgba(0,0,0,0.35)",
			},
			backgroundImage: (theme) => ({
				"gradient-line": "linear-gradient(352deg, rgba(85,242,175,1) 0%, rgba(255,218,34,1) 42%)",
                "bg-img": "url('./assets/bg.jpg')",
			}),
			fontFamily: {
				righteous: ["Righteous", "serif"],
				opensans: ["Open Sans", "sans-serif"],
			},
			content: {
				// bg-img: "url('./assets/bg.jpg')",
			},
		},
		screens: {
			xs: "480px",
			ss: "620px",
			sm: "768px",
			md: "1060px",
			lg: "1200px",
			xl: "1700px",
		},
	},
	plugins: [require("tw-elements/dist/plugin")],
};
