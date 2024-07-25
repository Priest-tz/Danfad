import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/Assets/logo.png";

const Footer = () => {
	return (
		<div className=" flex flex-col rounded-3xl m-4 md:py-2 md:px-6 gap-4 md:gap-10">
			<div className="flex flex-col md:flex-row mx-auto items-center gap-4 md:gap-80">
				<div className=" flex flex-wrap md:flex-nowrap md:flex-col justify-center gap-2">
					<Link href="/">
						<Image
							src={Logo}
							alt="Danfad Logo"
							width={50}
							height={50}
						/>
					</Link>

					<div className=" flex flex-col justify-center">
						<span className="text-base  font-semibold bg-gradient-to-r from-purple-900 via-purple-600 to-purple-900 text-transparent bg-clip-text">
							DANFAD
						</span>
						<span className="text-base font-semibold bg-gradient-to-r from-sky-500 via-sky-300 to-sky-500 text-transparent bg-clip-text">
							Global Consult
						</span>
					</div>
				</div>

				<div className="flex justify-between md:gap-32 gap-2">
					<div className="flex flex-col gap-4">
						<span className="font-bold text-base md:text-xl">
							Quick Links
						</span>

						<div className="flex flex-col gap-3 text-xs md:text-base text-secondary ">
							<a>About Us</a>
							<a>Contact Us</a>
							<a> Careers</a>
						</div>
					</div>

					<div className="flex flex-col gap-4">
						<span className="font-bold text-base md:text-xl">
							Legal Links
						</span>

						<div className="flex flex-col gap-3 text-xs md:text-base text-secondary">
							<a>Privacy Policy</a>
							<a>Terms of Use</a>
							<a>Cookie Policy</a>
						</div>
					</div>

					<div className="flex flex-col gap-4">
						<span className="font-bold text-base md:text-xl">
							Contact
						</span>

						<div className="flex flex-col gap-3 text-xs md:text-base text-secondary">
							<span>+234-803-900-3700</span>
							<span>connect@danfadconsult.com</span>
							<span>36 Marina,Lagos State, Nigeria</span>
						</div>
					</div>
				</div>
			</div>

			<div className="flex  items-end justify-between">
				<span className="text-sm md:text-base font-light">
					Copyright © 2024 Danfad Consult. All rights reserved.
				</span>

				<div className="flex md:flex-row flex-col gap-2 items-end">
					<a className="text-primary text-lg">
						<FaXTwitter />
					</a>
					<a className="text-primary text-lg">
						<FaInstagram />
					</a>
					<a className="text-primary text-lg">
						<FaLinkedin />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
