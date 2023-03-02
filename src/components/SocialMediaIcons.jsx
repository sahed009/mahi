import { SiFacebook, SiGmail, SiInstagram } from "react-icons/si";
import { SlCallOut } from "react-icons/sl"
const SocialMediaIcons = () => {
	return (
		<div className="flex justify-center md:justify-start my-5 gap-10">
			<a
				className="hover:opacity-50 transition duration-500 bg-[#09f496]/[0.8] p-3 rounded-full"
				href="https://www.facebook.com/Maaahhii009"
				target="_blank"
				rel="noreferrer"
			>
				<SiFacebook size="1.5rem" color="white" />
			</a>
            <a
				className="hover:opacity-50 transition duration-500 bg-[#09f496]/[0.8] p-3 rounded-full"
				href="mailto:maaahii009@gmail.com"
				target="_blank"
				rel="noreferrer"
			>
				<SiGmail size="1.5rem" color="white" />
			</a>
            <a
				className="hover:opacity-50 transition duration-500 bg-[#09f496]/[0.8] p-3 rounded-full"
				href="https://www.instagram.com/maaahhii009/"
				target="_blank"
				rel="noreferrer"
			>
				<SiInstagram size="1.5rem" color="white" />
			</a>
            <a
				className="hover:opacity-50 transition duration-500 bg-[#09f496]/[0.8] p-3 rounded-full"
				href="tel:+8801746941295"
				target="_blank"
				rel="noreferrer"
			>
				<SlCallOut size="1.5rem" color="white" />
			</a>
		</div>
	);
};

export default SocialMediaIcons;
