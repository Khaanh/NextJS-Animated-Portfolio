"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
	const [success, setSuccess] = useState(true);
	const [error, setError] = useState(false);
	const text = "Say Hello";

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		setError(false);
		setSuccess(false);

		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_SERVICE_ID,
				process.env.NEXT_PUBLIC_TEMPLATE_ID,
				form.current,
				{
					publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
				}
			)
			.then(
				(result) => {
					setSuccess(true);
					form.current.reset();
				},
				(error) => {
					setError(true);
					form.current.reset();
				}
			);
	};

	return (
		<motion.div
			className="h-full"
			initial={{ y: "-200vh" }}
			animate={{ y: "0%" }}
			transition={{ duration: 1 }}
		>
			<div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
				{/* TEXT CONTAINER */}
				<div className="text-2xl text-center mt-7 mb-10 md:mt-8 md:mb-16 lg:mb-0 lg:mt-0 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
					<div>
						{text.split("").map((letter, index) => (
							<motion.span
								key={index}
								initial={{ opacity: 1 }}
								animate={{ opacity: 0 }}
								transition={{
									duration: 3,
									repeat: Infinity,
									delay: index * 0.1,
								}}
							>
								{letter}
							</motion.span>
						))}
						😊
					</div>
				</div>
				{/* TEXT CONTAINER */}
				<form
					onSubmit={sendEmail}
					ref={form}
					className=" lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-8 p-24"
				>
					<span>Dear Khanh Nguyen,</span>
					<textarea
						className="bg-transparent border-b-2 border-b-black outline-none resize-none"
						name="user_email"
					/>
					<label for="email">My mail address is:</label>
					<input
						id="email"
						name="user_email"
						type="text"
						className="bg-transparent border-b-2 border-b-black outline-none"
					/>
					<span>Regards</span>
					<button className="p-2 bg-purple-200 rounded font-semibold text-gray-600 md:p-4">
						Send
					</button>
					{success && (
						<span className="text-green-600 font-semibold text-base md:text-lg lg:text-xl">
							Your message has been send successfully !
						</span>
					)}
					{error && (
						<span className="text-red-600 font-semibold">
							Something went wrong !
						</span>
					)}
				</form>
			</div>
		</motion.div>
	);
};

export default ContactPage;
