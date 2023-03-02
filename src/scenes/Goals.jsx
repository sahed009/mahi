import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GiChefToque, GiEarthAsiaOceania } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";

const Goals = ({ setSelectedPage }) => {
	return (
		<section id="goals" className="goals">
			{/* HEADINGS */}
			<div className="flex justify-start w-full">
				<div>
					<p className="font-righteous font-semibold text-4xl mt-10 text-[#09f496] animate-pulse">
						<span className="text-[#84e8ad]">My</span> Goals
					</p>
					<div className="flex md:justify-end my-5" />
				</div>
			</div>
			{/*Main Divs */}
			<div className="grid grid-cols-1 md:grid-cols-2">
				<div className="bg-[#09f496] font-righteous text-white text-md md:text-lg w-[95%] p-8 m-3 hover:bg-[#09f496]/[0.8] hover:text-black rounded-xl transition ease-in-out duration-300 shadow-2xl shadow-black/40">
					<HiOutlineLightBulb color="white" size="32px" />
					<h1 className="py-2 text-2xl w-[80%]">1. Culinary innovation:</h1>
					<p className="break-normal">
						I aspire to create unique and inventive dishes that push
						the boundaries of traditional cuisine. My future goals
						in this area might include experimenting with new
						ingredients, creating new flavor combinations, and
						developing innovative cooking techniques.
					</p>
				</div>

				<div className="bg-[#09f496] font-righteous text-white text-md md:text-lg w-[95%] p-8 m-3 hover:bg-[#09f496]/[0.8] hover:text-black rounded-xl transition ease-in-out duration-300 shadow-2xl shadow-black/40">
					<GiChefToque color="white" size="32px" />
					<h1 className="py-2 text-2xl w-[80%]">2. Career advancement: </h1>
					<p className="break-normal">
						Career advancement: My ultimate goal is to achieve
						success and recognition within the culinary industry.
						This might include rising to the top of a prestigious
						restaurant, winning awards and accolades, or even
						starting my own restaurant or culinary enterprise.
					</p>
				</div>

				<div className="bg-[#09f496] font-righteous text-white text-md md:text-lg w-[95%] p-8 m-3 hover:bg-[#09f496]/[0.8] hover:text-black rounded-xl transition ease-in-out duration-300 shadow-2xl shadow-black/40">
					<GiEarthAsiaOceania color="white" size="32px" />
					<h1 className="py-2 text-2xl w-[80%]">3. Sustainability: </h1>
					<p className="break-normal">
						I am passionate about promoting sustainable and ethical
						practices in the kitchen. My future goals in this area
						might include sourcing ingredients from local and
						organic suppliers, reducing food waste, and promoting
						environmentally-friendly cooking practices.
					</p>
				</div>

				<div className="bg-[#09f496] font-righteous text-white text-md md:text-lg w-[95%] p-8 m-3 hover:bg-[#09f496]/[0.8] hover:text-black rounded-xl transition ease-in-out duration-300 shadow-2xl shadow-black/40">
					<IoIosPeople color="white" size="32px" />
					<h1 className="py-2 text-2xl w-[80%]">4. Community engagement: </h1>
					<p className="break-normal">
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
