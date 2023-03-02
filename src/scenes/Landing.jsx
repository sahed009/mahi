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
							className="transition duration-500 z-10 w-full max-w-[600px] md:max-w-[800px] animate__animated animate__backInLeft"
							src={require("../assets/chefs-photo.png")}
						/>
					</div>
				) : (
					<img
						alt="profile"
						className="z-10 w-full max-w-[300px] md:max-w-[400px] sm:max-w-[150px] animate__animated animate__backInLeft"
						src={require("../assets/chefs-photo.png")}
					/>
				)}
			</div>

			{/* MAIN TEXT */}
			<div className="z-30 basis-2/5 mt-12 md:mt-32">
				{/* HEADINGS */}
				<div>
					<p className="text-3xl md:text-4xl font-righteous bg-black/[0.5] px-20 py-5 rounded-3xl text-white z-10 text-center md:text-start animate__animated animate__fadeInDown animate__delay-1s">
						GO<span className="text-[#84e8ad]">L</span>AM MA
						<span className="text-[#84e8ad]">HS</span>HER CH
						<span className="text-[#84e8ad]">OWDH</span>URY <br />
						<span
							className="xs:relative text-{#84e8ad} xs:font-semibold
              						before:absolute before:-left-[45px] before:-top-[120px] before:z-[-1]"
						>
							MAHI
						</span>
					</p>

					<p className="mt-10 mb-7 py-1 font-righteous text-lg text-center text-[#84e8ad] bg-black/[0.3] rounded-md px-5 md:text-start animate__animated animate__zoomInUp animate__delay-1s">
						A QUALITY CHEF FROM BANGLADESH.
						<br />
					</p>
					<div className="animate__animated animate__lightSpeedInLeft justify-center md:justify-start">
						<SocialMediaIcons />
					</div>
				</div>

				{/* CALL TO ACTIONS */}
				<div className="flex mt-5 justify-center md:justify-start">
					<AnchorLink offset={100}
						className="hover:bg-white/[0.9] hover:text-[#09f496] text-bold rounded-2xl hover:rounded-md py-3 px-7 font-semibold
             					  text-white bg-[#09f496]/[0.6] transition duration-500"
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
