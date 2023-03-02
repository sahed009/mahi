import React from "react";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
	return (
		<footer className="bg-[#09f496]">
			<div className="w-1/2 mx-auto p-4 md:flex md:justify-center mt-4">
						<p className="font-righteous text-white py-1 md:px-10">
                            <span className="text-[#8268ed]">MAHI</span> <br />
							&copy; 2023 Made By{" "}
							<span className="text-[#8268ed] text-lg m-[1px]">
								<a href="https://sahed009.github.io/portfolio" target="_blank" rel="noreferrer" >
									Sahed
								</a>
							</span>{" "}
							<br /> All Rights Reserved <br />
                            Images from freepik.com
						</p>
							<SocialMediaIcons />
			</div>
		</footer>
	);
};

export default Footer;
