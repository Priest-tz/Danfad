"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/Assets/Danfad_logo.png";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<nav className="flex justify-between items-center fixed z-10 w-full bg-transparent shadow-md py-4 px-4 md:px-8 lg:px-16">
			{/* Logo and Brand */}
			<Link href="/" className="flex items-center">
				<Image src={Logo} alt="Danfad Logo" width={80} height={40} />
				{/* Reduced logo size */}
				<div className="hidden lg:flex flex-col ml-2">
					{/* Hide text on smaller screens */}
					<span className="text-xl lg:text-3xl font-semibold bg-gradient-to-r from-purple-900 via-purple-600 to-purple-900 text-transparent bg-clip-text">
						DANFAD
					</span>
					<span className="text-xl lg:text-3xl font-semibold bg-gradient-to-r from-sky-500 via-sky-300 to-sky-500 text-transparent bg-clip-text">
						Global Consult
					</span>
				</div>
			</Link>

			{/* Hamburger menu button */}
			<div className="block lg:hidden">
				<button
					onClick={toggleMenu}
					className="text-gray-800 focus:outline-none">
					<HiMenu className="h-10 w-10" />
				</button>
			</div>

			{/* Links section */}
			<div
				className={`lg:flex lg:space-x-8 lg:pr-5 lg:pt-0 ${
					menuOpen ? "block" : "hidden"
				} absolute inset-x-0 top-20 mt-10 lg:mt-0 lg:top-0 bg-white shadow-md py-4 md:py-0 md:relative md:bg-transparent md:shadow-none md:flex md:items-center md:justify-center md:space-x-8`}>
				<Link
					href="/"
					className="text-white text-lg md:text-xl font-medium block lg:inline-block ">
					Home
				</Link>
				<Link
					href="/services"
					className="text-white text-lg md:text-xl font-medium block lg:inline-block ">
					Services
				</Link>
				<Link
					href="/people"
					className="text-white text-lg md:text-xl font-medium block lg:inline-block ">
					People
				</Link>
				<Link
					href="/training"
					className="text-white text-lg md:text-xl font-medium block lg:inline-block ">
					Training
				</Link>
				<Link
					href="/blog"
					className="text-white text-lg md:text-xl font-medium block lg:inline-block ">
					Blog
				</Link>
				<Link
					href="/contact"
					className="text-white text-lg md:text-xl font-medium block lg:inline-block ">
					Contact
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
