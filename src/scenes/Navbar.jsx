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
					? "text-white text-lg bg-[#ADA2FF] py-1.5 px-3 rounded-lg"
					: ""
			} hover:text-white hover:bg-[#ADA2FF] py-1.5 px-3 rounded-lg transition duration-400`}
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
	const navbarBackground = isTopOfPage ? "" : "bg-black";

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
					<h2 className="text-white text-lg md:text-2xl text-bold bg-[#ADA2FF] px-5 py-1.5  rounded-md shadow-2xl shadow-[#ADA2FF]">Mahi</h2>
				</AnchorLink>

				{/* DESKTOP NAV */}
				{isDesktop ? (
					<div className="flex justify-between gap-3 md:gap-7 md:text-lg font-opensans font-semibold text-[#ADA2FF] animate__animated animate__slideInUp">
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
							page="FoodGallery"
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
						className="rounded-full bg-[#ADA2FF] p-2 animate__animated animate__backInLeft"
						onClick={() => setIsMenuToggled(!isMenuToggled)}
					>
						<p className="font-righteous py-1.5 px-2 text-lg ease-in duration-500 opacity-95">
							<GiHamburger size="2rem" color="#fff" />
						</p>
					</button>
				)}

				{/* MOBILE MENU POPUP */}
				{!isDesktop && isMenuToggled && (
					<div className="fixed right-0 bottom-0 h-full bg-[#000000]/[0.6] w-full font-righteous text-[#FFF8E1]">
						{/* CLOSE ICON */}
						<div className="flex justify-end p-5">
							<button
								onClick={() => setIsMenuToggled(!isMenuToggled)}
							>
								<p className="text-2xl ease-in duration-500 font-righteous animate__animated animate__backInLeft bg-[#ADA2FF] rounded-full p-3">
									<MdRestaurantMenu  size="2rem" />
								</p>
							</button>
						</div>

						{/* MENU ITEMS */}
						<div className="flex flex-col gap-5 ml-[20%] text-xl animate__animated animate__backInLeft"
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
								page="FoodGallery"
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
