import React from "react";

const FoodGallery = () => {
	return (
		<section id="foodgallery" className="foodgallery">
			{/* HEADINGS */}
			<div className="flex-column justify-start w-full">
				<div>
					<p className="font-righteous font-semibold text-4xl mt-10 text-[#09f496] animate-pulse">
						<span className="text-[#84e8ad]">Food</span> Gallery
					</p>
					<div className="flex md:justify-end my-5" />
				</div>
				<div className="rounded-2xl shadow-2xl shadow-black/40">
					<div
						id="carouselDarkVariant"
						class="relative"
						data-te-carousel-init
						data-te-carousel-slide
					>
						{/*   Indicators    */}
						<div
							class="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
							data-te-carousel-indicators
						>
							<button
								data-te-target="#carouselDarkVariant"
								data-te-slide-to="0"
								data-te-carousel-active
								class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-100 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
								aria-current="true"
								aria-label="Slide 1"
							></button>
							<button
								data-te-target="#carouselDarkVariant"
								class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-100 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
								data-te-slide-to="1"
								aria-label="Slide 1"
							></button>
							<button
								data-te-target="#carouselDarkVariant"
								class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-100 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
								data-te-slide-to="2"
								aria-label="Slide 1"
							></button>
						</div>
						{/*   Inner    */}
						<div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
							{/*   Single item    */}
							<div
								class="relative float-left -mr-[100%] w-full !transform-none opacity-1 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-transform"
								data-te-carousel-fade
								data-te-carousel-item
								data-te-carousel-active
							>
								<img
									src={require('../assets/slider-img-1.jpg')}
									class="block w-full"
									alt="food"
								/>
								<div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block bg-black/[0.5]">
									<h5 class="text-2xl text-white font-righteous">Turkey Feast</h5>
									<p className="text-white font-righteous">
										Food that you'll love
									</p>
								</div>
							</div>
							{/*   Single item    */}
							<div
								class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
								data-te-carousel-fade
								data-te-carousel-item
							>
								<img
									src={require('../assets/slider-img-2.jpg')}
									class="block w-full"
									alt="food"
								/>
								<div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block bg-black/[0.5]">
									<h5 class="text-2xl text-white font-righteous">Chowmein </h5>
									<p className="text-white font-righteous">
										Looks yummy, right?
									</p>
								</div>
							</div>
							{/*   Single item  */}
							<div
								class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
								data-te-carousel-fade
								data-te-carousel-item
							>
								<img
									src={require('../assets/slider-img-3.jpg')}
									class="block w-full"
									alt="food"
								/>
								<div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block bg-black/[0.5]">
									<h5 class="text-2xl text-white font-righteous">Biriyani</h5>
									<p className="text-white font-righteous">
										Who doesn't like to cook?!
									</p>
								</div>
							</div>
						</div>
						{/*  Inner Controls  */}
						<button
							class="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-90  transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-95 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
							type="button"
							data-te-target="#carouselDarkVariant"
							data-te-slide="prev"
						>
							<span class="inline-block h-8 w-8 dark:grayscale dark:invert">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="h-6 w-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M15.75 19.5L8.25 12l7.5-7.5"
									/>
								</svg>
							</span>
							<span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
								Previous
							</span>
						</button>
						<button
							class="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-90 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-95 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
							type="button"
							data-te-target="#carouselDarkVariant"
							data-te-slide="next"
						>
							<span class="inline-block h-8 w-8 dark:grayscale dark:invert">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="h-6 w-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M8.25 4.5l7.5 7.5-7.5 7.5"
									/>
								</svg>
							</span>
							<span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
								Next
							</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FoodGallery;
