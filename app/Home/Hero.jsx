"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Banner from "../../public/Assets/project_mngmt.jpg";

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
	}, []);

	return (
		<div
			className="bg-cover bg-center min-h-screen flex flex-col justify-center"
			style={{
				backgroundImage: `url(${Banner.src})`,
			}}>
			<Head>
				<title>
					Consulting Company - Your Project Management Partner
				</title>
				<meta
					name="description"
					content="Dynamic consulting company specializing in project management and professional development."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="bg-black bg-opacity-10 w-4/5 flex flex-col items-left text-left px-8">
				<h1 className="text-4xl md:text-8xl font-normal text-white leading-relaxed mb-6">
					We provide exceptional <br />
					{services[currentService]}.
				</h1>
				<p className="text-lg text-gray-200 mb-8">
					We are a dynamic and innovative company dedicated to <br />
					providing exceptional project management solutions and
					<br />
					professional development services.
				</p>
			</div>
		</div>
	);
}
