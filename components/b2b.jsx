"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const B2BSolutions = () => {
	const [activeTab, setActiveTab] = useState(0);
	const [currentSlide, setCurrentSlide] = useState(0);

	// Auto-slide for services carousel
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide(
				(prev) => (prev + 1) % Math.ceil(services.length / 2)
			);
		}, 8000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="bg-gray-50 py-8 md:py-12">
			{/* Hero Section */}
			<div className="container mx-auto px-4">
				<div className="text-center mb-8 md:mb-12">
					<h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-4">
						Business-to-Business Solutions
					</h1>
					<p className="text-sm md:text-lg text-gray-600">
						Empowering Businesses for Sustainable Growth and Market
						Leadership
					</p>
				</div>

				{/* About Section */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center mb-12 md:mb-16">
					<div>
						<h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-4">
							About All-Encompassing Global Consult Limited
						</h2>
						<p className="text-sm md:text-base text-gray-600 mb-4">
							We provide tailored B2B consulting services designed
							to help businesses thrive in competitive markets.
							Whether you are a startup, an established
							enterprise, or a multinational corporation, our
							expertise ensures you achieve sustained
							profitability, operational excellence, and strategic
							expansion.
						</p>
					</div>
					<div className="relative h-48 md:h-96">
						<Image
							src="/images/b2b-consulting.jpg"
							alt="B2B Consulting"
							layout="fill"
							objectFit="cover"
							className="rounded-lg"
						/>
					</div>
				</div>

				{/* Services Section - Carousel */}
				<div className="mb-12 md:mb-16">
					<h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 md:mb-8 text-center">
						Our B2B Consulting Services
					</h2>
					<div className="relative overflow-hidden rounded-lg">
						<div
							className="flex transition-transform duration-500 ease-in-out"
							style={{
								transform: `translateX(-${
									currentSlide * 100
								}%)`,
							}}>
							{Array.from(
								{ length: Math.ceil(services.length / 2) },
								(_, slideIndex) => (
									<div
										key={slideIndex}
										className="min-w-full grid grid-cols-1 sm:grid-cols-2 gap-4 p-2 md:p-4">
										{services
											.slice(
												slideIndex * 2,
												slideIndex * 2 + 2
											)
											.map((service, index) => (
												<div
													key={index}
													className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
													<h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-4">
														{service.title}
													</h3>
													<ul className="list-disc list-inside text-sm md:text-base text-gray-600">
														{service.items.map(
															(item, i) => (
																<li
																	key={i}
																	className="mb-1 md:mb-2">
																	{item}
																</li>
															)
														)}
													</ul>
												</div>
											))}
									</div>
								)
							)}
						</div>
						<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
							{Array.from(
								{ length: Math.ceil(services.length / 2) },
								(_, index) => (
									<button
										key={index}
										onClick={() => setCurrentSlide(index)}
										className={`w-3 h-3 rounded-full ${
											currentSlide === index
												? "bg-blue-600"
												: "bg-gray-300"
										}`}></button>
								)
							)}
						</div>
					</div>
				</div>

				{/* Why Partner With Us Section - Tabs */}
				<div className="mb-12 md:mb-16">
					<h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 md:mb-8 text-center">
						Why Partner With Us?
					</h2>
					<div className="flex flex-col items-center">
						<div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4 md:mb-6">
							{reasons.map((reason, index) => (
								<button
									key={index}
									onClick={() => setActiveTab(index)}
									className={`px-3 py-1 md:px-4 md:py-2 rounded-lg font-semibold text-sm md:text-base ${
										activeTab === index
											? "bg-blue-600 text-white"
											: "bg-gray-200 text-gray-800"
									}`}>
									{reason.title}
								</button>
							))}
						</div>
						<div className="bg-white p-4 md:p-6 rounded-lg shadow-md w-full max-w-2xl text-center">
							<p className="text-sm md:text-base text-gray-600">
								{reasons[activeTab].description}
							</p>
						</div>
					</div>
				</div>

				{/* Industries We Serve Section */}
				<div className="mb-12 md:mb-16">
					<h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-8 text-center">
						Industries We Serve
					</h2>
					<p className="text-sm md:text-lg text-gray-600 text-center mb-8 md:mb-12">
						Explore how we help businesses across various industries
						achieve growth, optimize operations, and tackle
						challenges with our expert consulting services.
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
						{industries.map((industry, index) => (
							<div
								key={index}
								className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
								<div className="relative h-32 md:h-48">
									<Image
										src={industry.image}
										alt={industry.title}
										layout="fill"
										objectFit="cover"
									/>
								</div>
								<div className="p-4 md:p-6">
									<h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-4">
										{industry.title}
									</h3>
									<p className="text-sm md:text-base text-gray-600 mb-2 md:mb-4">
										{industry.description}
									</p>
									<button className="bg-blue-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-lg text-sm md:text-base hover:bg-blue-700 transition duration-300">
										{industry.cta}
									</button>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Call to Action Section */}
				<div className="text-center bg-blue-600 text-white py-8 md:py-12 rounded-lg">
					<h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4">
						Let’s Build Your Business Success Together
					</h2>
					<p className="text-sm md:text-lg mb-4 md:mb-6">
						Partner with All-Encompassing Global Consult Limited to
						unlock new growth opportunities, optimize your business
						processes, and establish a strong foothold in your
						industry.
					</p>
					<button className="bg-white text-blue-600 px-6 py-2 md:px-8 md:py-3 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-50 transition duration-300">
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
};

// Data for Services
const services = [
	{
		title: "Business Strategy & Expansion",
		items: [
			"Market research & feasibility studies",
			"Business model development & restructuring",
			"Growth acceleration & market entry strategies",
		],
	},
	{
		title: "Regulatory & Compliance Advisory",
		items: [
			"Industry-specific compliance frameworks",
			"Regulatory risk management & mitigation",
			"Government policy engagement & advisory",
		],
	},
	{
		title: "Corporate Financial Consulting",
		items: [
			"Mergers & acquisitions (M&A) advisory",
			"Business valuation & financial restructuring",
			"Capital raising & investment strategy",
		],
	},
	{
		title: "Operational Efficiency & Process Optimization",
		items: [
			"Lean business operations & process automation",
			"Supply chain & logistics optimization",
			"Cost-reduction & revenue enhancement strategies",
		],
	},
	{
		title: "Digital Transformation & Innovation",
		items: [
			"Technology adoption & integration",
			"Data-driven business intelligence solutions",
			"AI, automation, and blockchain advisory",
		],
	},
	{
		title: "Strategic Partnerships & B2B Networking",
		items: [
			"Business matchmaking & strategic alliances",
			"Joint ventures & collaboration opportunities",
			"Cross-border business facilitation",
		],
	},
];

// Data for Reasons to Partner
const reasons = [
	{
		title: "Profitability-Focused Solutions",
		description:
			"Every strategy we develop is designed to drive financial growth, reduce costs, and improve overall business performance.",
	},
	{
		title: "Industry-Specific Expertise",
		description:
			"We understand the complexities of various industries and provide customized solutions to fit your unique business environment.",
	},
	{
		title: "Global Perspective with Local Insights",
		description:
			"With a strong international presence and deep knowledge of local markets, we help businesses navigate complexities and seize opportunities worldwide.",
	},
	{
		title: "Data-Driven Decision Making",
		description:
			"Our consulting approach is anchored in analytics and market intelligence, ensuring informed business decisions for long-term success.",
	},
	{
		title: "Strong Network & High-Level Connections",
		description:
			"We connect businesses with key industry players, investors, regulatory bodies, and strategic partners to unlock new growth opportunities.",
	},
];

// Data for Industries
const industries = [
	{
		title: "Technology",
		description:
			"Driving innovation and digital transformation to help tech companies scale and thrive in a competitive landscape.",
		cta: "Learn More About Technology Consulting",
		image: "/images/technology.jpg",
	},
	{
		title: "Finance",
		description:
			"Enhancing profitability and managing financial risks with export advisory tailored for the financial sector.",
		cta: "Discover Our Finance Expertise",
		image: "/images/finance.jpg",
	},
	{
		title: "Retail",
		description:
			"Empowering retail businesses to enhance customer experiences and streamline supply chain operations.",
		cta: "See Our Retail Consulting Services",
		image: "/images/retail.jpg",
	},
	{
		title: "Healthcare",
		description:
			"Improving healthcare efficiency and patient outcomes through process optimization and regulatory expertise.",
		cta: "Explore Healthcare Solutions",
		image: "/images/healthcare.jpg",
	},
];

export default B2BSolutions;
