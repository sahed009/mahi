import { useEffect, useState } from "react";
import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import Border from "./components/border";
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
			<div className=" bg-bg-img bg-cover bg-center bg-img:opacity-70">
				<Navbar
					isTopOfPage={isTopOfPage}
					selectedPage={selectedPage}
					setSelectedPage={setSelectedPage}
				/>
				<div className="w-5/6 mx-auto">
					<Landing />
				</div>
				<Border />
			</div>
				<div className="w-5/6 mx-auto">
					<About />
				</div>
				<Border />
				<div className="w-5/6 mx-auto">
					<Goals />
				</div>
				<Border />
				<div className="w-5/6 mx-auto">
					<FoodGallery />
				</div>
				<Border />
				<div className="w-5/6 mx-auto">
					<Contact />
				</div>
				<Footer />
		</div>
	);
}

export default App;
