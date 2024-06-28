"use client";

import Image from "next/image";
import { useState } from "react";
import Logo from "../../public/Assets/Danfad_logo.png";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// Subscription logic here
		console.log(`Subscribed with email: ${email}`);
	};

	return (
		<footer className="bg-gray-800 text-gray-300 p-6 mt-8">
			<div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between md:items-start space-y-4 md:space-y-0">
				<div className="flex flex-col items-center md:items-start md:w-1/3">
					<form
						onSubmit={handleSubmit}
						className="flex flex-col space-y-2">
						<label htmlFor="email" className="text-gray-300">
							Subscribe to our newsletter
						</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="p-2 w-full rounded bg-gray-700 text-gray-300"
							placeholder="Enter your email"
							required
						/>
						<button
							type="submit"
							className="p-2 bg-blue-600 rounded text-gray-100">
							Subscribe
						</button>
					</form>
				</div>

				<div className="flex flex-col items-center md:items-start md:w-1/3">
					<Image
						src={Logo}
						alt="Company Logo"
						width={150}
						height={50}
					/>
					<p className="mt-2 text-center md:text-left">
						&copy; 2024 Consulting Company. All rights reserved.
					</p>
				</div>

				<div className="flex space-x-4 md:w-1/3">
					<a
						href="https://facebook.com"
						target="_blank"
						rel="noopener noreferrer">
						<FaFacebook size={30} />
					</a>
					<a
						href="https://twitter.com"
						target="_blank"
						rel="noopener noreferrer">
						<FaTwitter size={30} />
					</a>
					<a
						href="https://linkedin.com"
						target="_blank"
						rel="noopener noreferrer">
						<FaLinkedin size={30} />
					</a>
					<a
						href="https://instagram.com"
						target="_blank"
						rel="noopener noreferrer">
						<FaInstagram size={30} />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
