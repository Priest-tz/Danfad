"use client";

import { useState, useEffect } from "react";
import Head from "next/head";

export default function HeroPage() {
	const services = [
		"Project Management Consulting Services",
		"Organizational Planning",
		"Stakeholder Engagement",
		"Project Management Professional Courses and Seminars",
	];

	const [currentService, setCurrentService] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentService(
				(prevService) => (prevService + 1) % services.length
			);
		}, 3000);
		return () => clearInterval(interval);
	}, [services.length]);

	return (
		<div className="flex flex-col justify-center h-screen md:px-12 md:py-24 py-12">
			<Head>
				<title>Danfad - Your Project Management Partner</title>
				<meta
					name="description"
					content="Dynamic consulting company specializing in project management and professional development."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="md:w-4/5 justify-center flex flex-col text-left px-8  md:mt-0">
				<span className="text-4xl md:text-8xl font-medium text-white leading-relaxed mb-6">
					We provide exceptional <br />
					{services[currentService]}.
				</span>
				<span className="md:text-lg text-sm text-gray-200 mb-6">
					We are a dynamic and innovative company dedicated to <br />
					providing exceptional project management solutions and
					<br />
					professional development services.
				</span>
			</div>
			<div className="md:px-8 px-6">
				<button className="bg-blue-600 hover:bg-blue-700 text-white md:text-lg text-sm font-light md:w-1/5 md:px-4 px-10 py-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-105">
					Get Started
				</button>
			</div>
		</div>
	);
}
