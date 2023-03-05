import { useEffect, useState } from "react";
import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import About from "./scenes/About";
import Goals from "./scenes/Goals";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import FoodGallery from "./scenes/FoodGallery";

function App() {
	const [selectedPage, setSelectedPage] = useState("home");
	const [isTopOfPage, setIsTopOfPage] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) {
				setIsTopOfPage(true);
				setSelectedPage("home");
			}
			if (window.scrollY !== 0) setIsTopOfPage(false);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="app">
			<div className="bg-white/[0.2]">
            <div>
				<Navbar
					isTopOfPage={isTopOfPage}
					selectedPage={selectedPage}
					setSelectedPage={setSelectedPage}
				/>
				<div className="w-5/6 mx-auto py-10">
					<Landing />
				</div>
			</div>
			<div className="w-5/6 mx-auto py-10">
				<About />
			</div>

			<div className="w-5/6 mx-auto py-10">
				<Goals />
			</div>

			<div className="w-5/6 mx-auto py-10">
				<FoodGallery />
			</div>

			<div className="w-5/6 mx-auto flex justify-center items-center py-10">
				<Contact />
			</div>
            </div>
			<Footer className="border-2 border-[#09f496] py-10"/>
		</div>
	);
}

export default App;
