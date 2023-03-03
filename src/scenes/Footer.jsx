import React from "react";
import SocialMediaIcons from "../components/SocialMediaIcons";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Footer = () => {
	return (
		<footer className="bg-[#000]">
			<div
				data-aos="zoom-out-down"
				data-aos-duration="500"
				data-aos-easing="ease-in-sine"
                data-aos-anchor-placement="center-bottom"
				className="w-1/2 mx-auto p-4 md:flex md:justify-center mt-4"
			>
				<p className="font-righteous text-[#84e8ad] py-1 md:px-10">
					<span className="text-[#09f496]">MAHI</span> <br />
					&copy; 2023 Made By{" "}
					<span className="text-[#09f496] text-lg m-[1px]">
						<a
							href="https://sahed009.github.io/portfolio"
							target="_blank"
							rel="noreferrer"
						>
							Sahed
						</a>
					</span>{" "}
					<br /> All Rights Reserved <br />
					Images from freepik.com
				</p>
			</div>
			<div className="flex-row w-1/4 mx-auto justify-center items-center pb-5">
				<SocialMediaIcons />
			</div>
		</footer>
	);
};

export default Footer;
