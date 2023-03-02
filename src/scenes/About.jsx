import React from "react";

const About = ({ setSelectedPage }) => {
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
			<div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-3">
				<div className="bg-[#09f496]/[0.1] shadow-2xl">
					<img src={require("../assets/food-1.jpg")} alt="food" className="p-3" />
				</div>

				<div className="bg-[#09f496]/[0.9] rounded-md shadow-2xl shadow-black/40">
					<p className="p-5 font-righteous md:text-lg text-white">
						I'm a 22-year-old trainee chef from Sylhet, Bangladesh
						with a passion for creating flavorful and innovative
						dishes. I'm always experimenting with new ingredients
						and techniques and hope to one day become a master chef
						in the culinary world's. In my free time, I love to
						explore local markets for fresh produce and inspiration.
						Cooking is not just a profession for me, it's a way of
						life.
					</p>
				</div>
				<div className=" bg-[#09f496]/[0.9] rounded-md shadow-2xl shadow-black/40">
					<p className="p-5 font-righteous md:text-lg text-white">
						Cooking is my passion and way of life. I believe that
						food brings people together and creates lasting
						memories. European cuisine has always intrigued me with
						its rich traditions. Becoming a chef is not just
						mastering techniques, but understanding cultural and
						emotional significance.
					</p>
				</div>
				<div className="bg-[#09f496]/[0.1] shadow-2xl">
					<img src={require("../assets/food-2.jpg")} alt="food" className="p-3"/>
				</div>
			</div>
		</section>
	);
};

export default About;
