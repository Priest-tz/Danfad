"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/Assets/logo.png";

const Navbar = ({ linkColor = "text-black", bgColor = "bg-inherit" }) => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<nav className="bg-blue-300 sticky top-0 z-50 flex flex-col md:flex-row md:items-center justify-between m-2 py-6 px-6 md:px-12 rounded-lg">
			<div className="flex items-center justify-between">
				<div className="flex-shrink-0 mr-14">
					{/* Logo and Brand */}
					<div className="flex items-center">
						<Link href="/Home">
							<Image
								src={Logo}
								alt="Danfad Logo"
								width={70}
								height={20}
							/>
						</Link>
						{/* Reduced logo size */}
						<div className="hidden lg:flex flex-col">
							{/* Hide text on smaller screens */}
							<span className="text-xl font-semibold bg-gradient-to-r from-purple-900 via-purple-600 to-purple-900 text-transparent bg-clip-text">
								DANFAD
							</span>
							<span className="text-xl font-semibold bg-gradient-to-r from-sky-500 via-sky-300 to-sky-500 text-transparent bg-clip-text">
								Global Consult
							</span>
						</div>
					</div>
				</div>

				{/* Hamburger menu button */}
				<div className="block md:hidden ml-20">
					<button onClick={toggleMenu} className={linkColor}>
						<svg
							className="w-10 h-10"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							{menuOpen ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16m-7 6h7"
								/>
							)}
						</svg>
					</button>
				</div>
			</div>

			{/* Links section */}
			<div
				className={`lg:flex lg:space-x-8 lg:pr-5 lg:pt-0 w-full  ${
					menuOpen
						? "flex flex-col items-center lg:mt-0 lg:top-0  "
						: "hidden"
				} md:py-0 md:relative md:flex md:items-center md:justify-end md:space-x-8`}>
				<Link
					href="/"
					className={`${linkColor} text-xl md:text-xl font-medium block lg:inline-block py-4`}>
					Home
				</Link>
				<Link
					href="/"
					className={`${linkColor} text-xl md:text-xl font-medium block lg:inline-block py-4`}>
					Blog
				</Link>
				<Link
					href="/about"
					className={`${linkColor} text-xl md:text-xl font-medium block lg:inline-block py-4`}>
					About us
				</Link>

				<Link
					href="/contact"
					className={`${linkColor} text-xl md:text-xl font-medium block lg:inline-block py-4`}>
					Contact
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
