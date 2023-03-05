import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import SocialMediaIcons from "../components/SocialMediaIcons";
import "animate.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
	const isAboveLarge = useMediaQuery("(min-width: 1060px)");
	return (
		<section
			id="home"
			className="md:flex md:justify-between md:items-center gap-16 md:h-full py-1"
		>
			{/* IMAGE SECTION */}
			<div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center">
				{isAboveLarge ? (
					<div className="relative">
						<img
							alt="profile"
							className="transition duration-500 z-10 w-full max-w-[800px] md:max-w-[1000px] animate__animated animate__backInLeft"
							src={require("../assets/chefs-photo.png")}
						/>
					</div>
				) : (
					<img
						alt="profile"
						className="z-10 w-full max-w-[400px] md:max-w-[500px] sm:max-w-[300px] animate__animated animate__backInLeft"
						src={require("../assets/chefs-photo.png")}
					/>
				)}
			</div>

			{/* MAIN TEXT */}
			<div className="z-30 basis-2/5 mt-12 md:mt-32">
				{/* HEADINGS */}
				<div>
					<p className="text-3xl md:text-4xl lg:text-5xl font-righteous px-20 py-5 rounded-3xl z-10 text-start font-bold shadow-2xl  animate__animated animate__fadeInDown animate__delay-1s">
						<span className="text-[70px] md:text-[100px] text-[#ADA2FF]">
							{" "}
							&#8220;{" "}
						</span>
						<br />
						GO<span className="text-[#ADA2FF]">L</span>AM MA
						<span className="text-[#ADA2FF]">HS</span>HER CH
						<span className="text-[#ADA2FF]">OWDH</span>URY <br />
						<span
							className="xs:relative text-[#ADA2FF] xs:font-bold
              						before:absolute before:-left-[45px] before:-top-[120px] before:z-[-1]"
						>
							MAHI
						</span>
					</p>

					<p className="w-[100%] justify-center items-center my-5 py-2 font-righteous text-2xl text-center text-[#ADA2FF] font-bold rounded-md px-5 md:text-start animate__animated animate__zoomInUp animate__delay-1s">
						A QUALITY CHEF FROM BANGLADESH
						<br />
					</p>
					<div className="animate__animated animate__lightSpeedInLeft justify-center md:justify-start">
						<SocialMediaIcons />
					</div>
				</div>

				{/* CALL TO ACTIONS */}
				<div className="flex mt-5 justify-center md:justify-start">
					<AnchorLink
						offset={100}
						className="hover:bg-black/[0.8] hover:text-[#ADA2FF] text-bold rounded-md py-3 px-7 font-semibold
             					  text-white bg-[#ADA2FF]/[0.8] transition duration-500"
						onClick={() => setSelectedPage("contact")}
						href="#contact"
					>
						Let's Talk
					</AnchorLink>
				</div>
			</div>
		</section>
	);
};

export default Landing;
