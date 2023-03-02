import React from "react";
import "../assets/css/animatedBorder.css";
// import useMediaQuery from "../hooks/useMediaQuery";
// import AnchorLink from "react-anchor-link-smooth-scroll";

const About = ({ setSelectedPage }) => {
	// const isAboveLarge = useMediaQuery("(min-width: 1060px)");
	return (
		<section id="about" className="about">
			{/* HEADINGS */}
			<div className="flex justify-start w-full">
				<div>
					<p className=" font-righteous font-semibold text-4xl mt-10 text-[#09f496] animate-pulse">
						<span className="text-[#84e8ad]">About</span> Me
					</p>
					<div className="flex md:justify-end my-5" />
				</div>
			</div>

			{/*Main Divs */}
			<div className="grid grid-cols-1 md:grid-cols-2">
				<div className="border__animation card bg-[#09f496]/[0.1]">
					<img src={require("../assets/food-1.jpg")} alt="food" />
					<span class="top"></span>
					<span class="right"></span>
					<span class="bottom"></span>
					<span class="left"></span>
				</div>

				<div className="border__animation card bg-[#09f496]/[0.9]">
					<p className="py-5 font-righteous text-lg md:text-3xl text-white">
						I'm a 22-year-old trainee chef from Sylhet, Bangladesh
						with a passion for creating flavorful and innovative
						dishes. I'm always experimenting with new ingredients
						and techniques and hope to one day become a master chef
						in the culinary world's. In my free time, I love to
						explore local markets for fresh produce and inspiration.
						Cooking is not just a profession for me, it's a way of
						life.
					</p>
					<span class="top"></span>
					<span class="right"></span>
					<span class="bottom"></span>
					<span class="left"></span>
				</div>
				<div className="border__animation card bg-[#09f496]/[0.9]">
					<p className="py-5 font-righteous text-lg md:text-3xl text-white">
						Cooking is my passion and way of life. I believe that
						food brings people together and creates lasting
						memories. European cuisine has always intrigued me with
						its rich traditions. Becoming a chef is not just
						mastering techniques, but understanding cultural and
						emotional significance.
					</p>
					<span class="top"></span>
					<span class="right"></span>
					<span class="bottom"></span>
					<span class="left"></span>
				</div>
				<div className="border__animation card bg-[#09f496]/[0.1]">
					<img src={require("../assets/food-2.jpg")} alt="food" />
					<span class="top"></span>
					<span class="right"></span>
					<span class="bottom"></span>
					<span class="left"></span>
				</div>
			</div>
		</section>
	);
};

export default About;
