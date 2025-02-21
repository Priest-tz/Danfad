"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-gradient-to-r from-blue-500 via-purple-600 to-[#4492d7] px-4 py-4">
			<div className="container mx-auto flex justify-between items-center">
				{/* Logo  */}
				<div className="text-white text-xl font-bold">
					All-encompassing Global Consult
				</div>

				{/* Hamburger Menu Icon for Mobile */}
				<div className="flex md:hidden">
					<button
						onClick={toggleMenu}
						className="text-white focus:outline-none">
						<svg
							className="w-8 h-8"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16m-7 6h7"
							/>
						</svg>
					</button>
				</div>

				{/* Desktop Menu*/}
				<div className="hidden md:flex space-x-6">
					<Link href="/" className="text-white hover:text-gray-200">
						Home
					</Link>
					<Link
						href="/about"
						className="text-white hover:text-gray-200">
						Services
					</Link>

					<Link
						href="/about"
						className="text-white hover:text-gray-200">
						About Us
					</Link>
					<Link
						href="/contact"
						className="text-white hover:text-gray-200">
						Contact Us
					</Link>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden fixed inset-0 bg-blue-600 z-50">
					<div className="flex flex-col h-full justify-center items-center">
						{/* Close Button */}
						<button
							onClick={toggleMenu}
							className="absolute top-4 right-4 text-white focus:outline-none">
							<svg
								className="w-8 h-8"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>

						{/* Navlinks  */}
						<Link
							href="/"
							className="w-full text-center text-white text-2xl py-4 border-b border-white/20 hover:bg-white/10">
							Home
						</Link>
						<Link
							href="/services"
							className="w-full text-center text-white text-2xl py-4 border-b border-white/20 hover:bg-white/10">
							Services
						</Link>

						<Link
							href="/about"
							className="w-full text-center text-white text-2xl py-4 border-b border-white/20 hover:bg-white/10">
							About Us
						</Link>
						<Link
							href="/contact"
							className="w-full text-center text-white text-2xl py-4 border-b border-white/20 hover:bg-white/10">
							Contact Us
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
}
