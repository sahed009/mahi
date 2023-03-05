import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const About = () => {
	return (
		<section id="about" className="about">
			{/* HEADINGS */}
			<div className="flex justify-start w-full">
				<div>
					<p className=" font-righteous font-semibold md:font-bold text-4xl mt-10 text-[#ADA2FF] animate-pulse">
						<span className="text-[#ADA2FF]/[0.8]">About</span> Me
					</p>
					<div className="flex md:justify-end my-5" />
				</div>
			</div>

			{/*Main Divs */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
				<div
					data-aos="fade-up"
					data-aos-duration="1000"
					data-aos-easing="ease-in-sine"
                    data-aos-anchor-placement="center-bottom"
					className="bg-[#ADA2FF]/[0.2] shadow-2xl shadow-black/40  flex justify-center items-center"
				>
					<img
						src={require("../assets/food-1.jpg")}
						alt="food"
						className="p-3"
					/>
				</div>

				<div
					data-aos="fade-down"
					data-aos-duration="1000"
					data-aos-easing="ease-in-sine"
                    data-aos-anchor-placement="center-bottom"
					className="bg-[#ADA2FF]/[0.9] rounded-md shadow-2xl shadow-black/40  flex justify-center items-center"
				>
					<p className="font-righteous font-semibold md:text-lg lg:text-2xl text-white p-5 md:p-10">
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
				<div
					data-aos="fade-up"
					data-aos-duration="1000"
					data-aos-easing="ease-in-sine"
                    data-aos-anchor-placement="center-bottom"
					className=" bg-[#ADA2FF]/[0.9] rounded-md shadow-2xl shadow-black/40  flex justify-center items-center"
				>
					<p className="font-righteous font-semibold md:text-lg lg:text-2xl text-white p-5 md:p-10">
						Cooking is my passion and way of life. I believe that
						food brings people together and creates lasting
						memories. European cuisine has always intrigued me with
						its rich traditions. Becoming a chef is not just
						mastering techniques, but understanding cultural and
						emotional significance.
					</p>
				</div>
				<div
					data-aos="fade-down"
					data-aos-duration="1000"
					data-aos-easing="ease-in-sine"
                    data-aos-anchor-placement="center-bottom"
					className="bg-[#ADA2FF]/[0.2] shadow-2xl shadow-black/40  flex justify-center items-center"
				>
					<img
						src={require("../assets/food-2.jpg")}
						alt="food"
						className="p-3"
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
