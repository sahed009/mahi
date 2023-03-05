import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GiChefToque, GiEarthAsiaOceania } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Goals = ({ setSelectedPage }) => {
	return (
		<section id="goals" className="goals">
			{/* HEADINGS */}
			<div className="flex justify-start w-full">
				<div>
					<p className="font-righteous font-semibold text-4xl mt-10 text-[#ADA2FF] animate-pulse">
						<span className="text-[#ADA2FF]/[0.8]">My</span> Goals
					</p>
					<div className="flex md:justify-end my-5" />
				</div>
			</div>
			{/*Main Divs */}
			<div className="grid grid-cols-1 md:grid-cols-2">
				<div
					data-aos="flip-left"
					data-aos-duration="1000"
					data-aos-easing="ease-in-sine"
                    data-aos-anchor-placement="center-bottom"
					className="bg-[#ADA2FF] font-righteous text-white text-md md:text-lg w-[95%] p-8 m-3 hover:bg-[#ADA2FF]/[0.8] hover:text-black rounded-xl transition ease-in-out duration-500 shadow-2xl shadow-black/40"
				>
					<HiOutlineLightBulb color="white" size="32px" />
					<h1 className="py-2 text-2xl w-[80%] ease-in-out duration-300">
						1. Culinary innovation:
					</h1>
					<p className="break-normal ease-in-out duration-500">
						I aspire to create unique and inventive dishes that push
						the boundaries of traditional cuisine. My future goals
						in this area might include experimenting with new
						ingredients, creating new flavor combinations, and
						developing innovative cooking techniques.
					</p>
				</div>

				<div
					data-aos="flip-right"
					data-aos-duration="1000"
					data-aos-easing="ease-in-sine"
                    data-aos-anchor-placement="center-bottom"
					className="bg-[#ADA2FF] font-righteous text-white text-md md:text-lg w-[95%] p-8 m-3 hover:bg-[#ADA2FF]/[0.8] hover:text-black rounded-xl transition ease-in-out duration-500 shadow-2xl shadow-black/40"
				>
					<GiChefToque color="white" size="32px" />
					<h1 className="py-2 text-2xl w-[80%] ease-in-out duration-300">
						2. Career advancement:{" "}
					</h1>
					<p className="break-normal ease-in-out duration-500">
						Career advancement: My ultimate goal is to achieve
						success and recognition within the culinary industry.
						This might include rising to the top of a prestigious
						restaurant, winning awards and accolades, or even
						starting my own restaurant or culinary enterprise.
					</p>
				</div>

				<div
					data-aos="flip-right"
					data-aos-duration="1000"
					data-aos-easing="ease-in"
					className="bg-[#ADA2FF] font-righteous text-white text-md md:text-lg w-[95%] p-8 m-3 hover:bg-[#ADA2FF]/[0.8] hover:text-black rounded-xl transition ease-in-out duration-500 shadow-2xl shadow-black/40"
				>
					<GiEarthAsiaOceania color="white" size="32px" />
					<h1 className="py-2 text-2xl w-[80%] ease-in-out duration-300">
						3. Sustainability:{" "}
					</h1>
					<p className="break-normal ease-in-out duration-500">
						I am passionate about promoting sustainable and ethical
						practices in the kitchen. My future goals in this area
						might include sourcing ingredients from local and
						organic suppliers, reducing food waste, and promoting
						environmentally-friendly cooking practices.
					</p>
				</div>

				<div
					data-aos="flip-left"
					data-aos-duration="1000"
					data-aos-easing="ease-in"
					className="bg-[#ADA2FF] font-righteous text-white text-md md:text-lg w-[95%] p-8 m-3 hover:bg-[#ADA2FF]/[0.8] hover:text-black rounded-xl transition ease-in-out duration-500 shadow-2xl shadow-black/40"
				>
					<IoIosPeople color="white" size="32px" />
					<h1 className="py-2 text-2xl w-[80%] ease-in-out duration-300">
						4. Community engagement:{" "}
					</h1>
					<p className="break-normal ease-in-out duration-500">
						I am committed to using my skills to make a positive
						impact on my local community. My future goals in this
						area might include partnering with local charities or
						organizations to provide food for those in need, or
						using my platform to raise awareness of important social
						issues through food.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Goals;
