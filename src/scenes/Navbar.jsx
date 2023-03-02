import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { MdRestaurantMenu } from "react-icons/md";
import { GiHamburger } from "react-icons/gi";

const Link = ({ page, selectedPage, setSelectedPage }) => {
	const lowerCasePage = page.toLowerCase();
	return (
		<AnchorLink
			offset={100}
			className={`${
				selectedPage === lowerCasePage
					? "text-white text-lg bg-[#09f496] py-1.5 px-3 rounded-lg"
					: ""
			} hover:text-[#09f496] hover:bg-white py-1.5 px-3 rounded-lg transition duration-400`}
			href={`#${lowerCasePage}`}
			onClick={() => setSelectedPage(lowerCasePage)}
		>
			{page}
		</AnchorLink>
	);
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
	const [isMenuToggled, setIsMenuToggled] = useState(false);
	const isDesktop = useMediaQuery("(min-width: 667px)");
	const navbarBackground = isTopOfPage ? "" : "bg-black/[0.7]";

	return (
		<nav
			className={`${navbarBackground} z-40 w-full fixed opacity-90 hover:opacity-100 ease-in duration-300 top-0 py-6`}
		>
			<div className="flex items-center justify-between mx-auto w-5/6">
				<AnchorLink
					offset={100}
					onClick={() => setSelectedPage("home")}
					href="#home"
				>
					<img
						className="h-[40px] md:h-[55px] animate__animated animate__flipInY animate__delay-1s"
						src={require("../assets/logo.png")}
						alt="logo"
					/>
				</AnchorLink>

				{/* DESKTOP NAV */}
				{isDesktop ? (
					<div className="flex justify-between gap-7 text-lg font-opensans font-semibold text-white animate__animated animate__slideInUp">
						<Link
							page="Home"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page="About"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page="Goals"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page="Testimonials"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page="Contact"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
					</div>
				) : (
					<button
						className="rounded-full bg-[#09f496] p-2 animate__animated animate__backInLeft"
						onClick={() => setIsMenuToggled(!isMenuToggled)}
					>
						<p className="font-righteous py-1.5 px-2 text-lg ease-in duration-500 opacity-95">
							<GiHamburger size="2rem" color="white" />
						</p>
					</button>
				)}

				{/* MOBILE MENU POPUP */}
				{!isDesktop && isMenuToggled && (
					<div className="fixed right-0 bottom-0 h-full bg-[#09f496] w-[300px] font-righteous">
						{/* CLOSE ICON */}
						<div className="flex justify-end p-12">
							<button
								onClick={() => setIsMenuToggled(!isMenuToggled)}
							>
								<p className="text-3xl ease-in duration-500 font-righteous animate__animated animate__backInLeft">
									<MdRestaurantMenu  size="2rem" color="white" />
								</p>
							</button>
						</div>

						{/* MENU ITEMS */}
						<div className="flex flex-col gap-10 ml-[20%] text-3xl animate__animated animate__backInLeft"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}>
							<Link
								page="Home"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
							<Link
								page="About"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
							<Link
								page="Goals"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
							<Link
								page="Testimonials"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
							<Link
								page="Contact"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
