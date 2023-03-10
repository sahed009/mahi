import React from "react";
import { useForm } from "react-hook-form";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Contact = () => {
	const {
		register,
		trigger,
		formState: { errors },
	} = useForm();

	const onSubmit = async (e) => {
		console.log("~ e", e);
		const isValid = await trigger();
		if (!isValid) {
			e.preventDefault();
		}
	};

	return (
		<section id="contact" className="contact">
			{/* HEADINGS */}
			<div className="flex justify-start w-full">
				<div>
					<p className="font-righteous font-semibold text-4xl mt-10 text-[#ADA2FF] animate-pulse">
						<span className="text-[#ADA2FF]">SEND ME</span> A
						MESSAGE
					</p>
					<div className="flex md:justify-end my-5" />
				</div>
			</div>

			{/* FORM & IMAGE */}
			<div className="md:flex md:justify-between gap-16 my-5">
				<div
					data-aos="zoom-in-down"
					data-aos-duration="1000"
					data-aos-easing="ease-in-sine"
                    data-aos-anchor-placement="center-bottom"
					className="flex-end basis-2/3 mt-5 md:mt-0"
				>
					<form
						target="_blank"
						onSubmit={onSubmit}
						action="https://formsubmit.co/e5f29d067b123fc77927d0e9941d2388"
						method="POST"
					>
						<input
							className="w-full placeholder-[#ADA2FF] font-semibold bg-white rounded-lg p-5 shadow-2xl shadow-[#ADA2FF]/40"
							type="text"
							placeholder="NAME"
							{...register("name", {
								required: true,
								maxLength: 100,
							})}
						/>
						{errors.name && (
							<p className="text-[#ADA2FF] mt-1">
								{errors.name.type === "required" &&
									"This field is required."}
								{errors.name.type === "maxLength" &&
									"Max length is 100 char."}
							</p>
						)}

						<input
							className="w-full placeholder-[#ADA2FF] font-semibold bg-white rounded-lg p-5 mt-5 shadow-2xl shadow-[#ADA2FF]/40"
							type="text"
							placeholder="EMAIL"
							{...register("email", {
								required: true,
								pattern:
									/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							})}
						/>
						{errors.email && (
							<p className="text-[#ADA2FF] mt-1">
								{errors.email.type === "required" &&
									"This field is required."}
								{errors.email.type === "pattern" &&
									"Invalid email address."}
							</p>
						)}

						<textarea
							className="w-full placeholder-[#ADA2FF] font-semibold bg-white rounded-lg p-5 mt-5 shadow-2xl shadow-[#ADA2FF]/40"
							name="message"
							placeholder="MESSAGE"
							rows="4"
							cols="50"
							{...register("message", {
								required: true,
								maxLength: 2000,
							})}
						/>
						{errors.message && (
							<p className="text-[#ADA2FF] mt-1">
								{errors.message.type === "required" &&
									"This field is required."}
								{errors.message.type === "maxLength" &&
									"Max length is 2000 char."}
							</p>
						)}

						<button
							className="p-5 bg-[#ADA2FF] text-white font-semibold mt-5 hover:bg-white hover:text-[#ADA2FF] hover:rounded-lg hover:text-bold transition duration-500 shadow-2xl shadow-[#ADA2FF]/40"
							type="submit"
						>
							SEND ME A MESSAGE
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
