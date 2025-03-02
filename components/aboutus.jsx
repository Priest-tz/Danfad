"use client";
import Image from "next/image";
import { useState } from "react";

export default function About() {
	const [activeIndex, setActiveIndex] = useState(null);

	const toggleAccordion = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	const accordionItems = [
		{
			title: "Leverage Decades of Consulting Expertise",
			content:
				"Navigate business challenges with confidence using our extensive experience.",
		},
		{
			title: "Personalized Strategies",
			content: "We prioritize your unique needs to drive results.",
		},
		{
			title: "Successful Collaborations",
			content:
				"Our partnerships have helped businesses grow and achieve measurable success.",
		},
		{
			title: "Aligned with Your Goals",
			content:
				"We design strategies that align with your business goals and industry demands.",
		},
	];

	const listItems = [
		"Leverage decades of consulting expertise to navigate business challenges with confidence.",
		"We prioritize your unique needs, offering personalized strategies that drive results.",
		"Our successful collaborations have helped businesses grow, streamline, and achieve measurable success.",
		"We design strategies that are specifically aligned with your business goals and industry demands.",
	];

	return (
		<div className="bg-white py-6 sm:py-12">
			<div className="space-y-6 sm:space-y-12">
				{/* Header Section */}
				<div className="w-full flex justify-center px-4 sm:px-0">
					<div className="flex flex-col sm:flex-row items-center justify-between max-w-7xl w-full space-y-6 sm:space-y-0 sm:space-x-8">
						<span className="text-2xl sm:text-4xl font-semibold text-center sm:text-left">
							Driving Business Success <br />
							through{" "}
							<span className="bg-gradient-to-r from-blue-500 via-purple-600 to-[#4492d7] bg-clip-text text-transparent">
								Expertise
							</span>{" "}
							&<br />
							<span className="bg-gradient-to-r from-blue-500 via-purple-600 to-[#4492d7] bg-clip-text text-transparent">
								Innovation
							</span>
						</span>
						<span className="text-base sm:text-lg text-gray-700 border-l-2 border-blue-500 pl-4 max-w-full sm:max-w-[40%]">
							With more than a decade of expertise in business
							consulting, we specialize in helping companies
							navigate challenges, streamline operations, and
							unlock growth opportunities. Whether you’re scaling
							up, optimizing efficiency, or reinventing your
							strategy, our tailored solutions ensure sustainable
							success. Let’s shape the future of your business
							together.
						</span>
					</div>
				</div>

				{/* Image Section */}
				<div className="py-6 sm:py-12">
					<Image
						src="/images/project_mngmt.jpg"
						alt="Business Success"
						width={500}
						height={100}
						className="w-full h-48 sm:h-96 object-cover"
					/>
				</div>

				{/* Our Businesses Section */}
				<div className="flex flex-col justify-center items-center py-6 sm:py-12 px-4 sm:px-12">
					<span className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
						Our Businesses from inception
					</span>
					<span className="text-sm sm:text-base text-gray-700 text-center">
						Founded with a vision to transform the consulting
						landscape, we began our journey in 2005 with a
						commitment to providing innovative solutions that
						address the unique challenges faced by businesses. Over
						the years, we have partnered with diverse clients,
						fostering growth and driving success through our
						strategic consulting services. Our unique approach
						combines deep industry knowledge with a passion for
						client success, enabling us to craft tailored strategies
						that help organizations thrive in an ever-evolving
						marketplace.
					</span>
				</div>

				{/* Stats Section */}
				<div className="py-6 sm:py-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center bg-gradient-to-r from-blue-500 via-purple-600 to-[#4492d7]">
					<div>
						<h3 className="text-2xl sm:text-3xl font-bold text-white">
							10+
						</h3>
						<p className="text-sm sm:text-base text-white">
							Years of Experience
						</p>
					</div>
					<div>
						<h3 className="text-2xl sm:text-3xl font-bold text-white">
							100+
						</h3>
						<p className="text-sm sm:text-base text-white">
							Successful Projects
						</p>
					</div>
					<div>
						<h3 className="text-2xl sm:text-3xl font-bold text-white">
							80%
						</h3>
						<p className="text-sm sm:text-base text-white">
							Client Retention Rate
						</p>
					</div>
					<div>
						<h3 className="text-2xl sm:text-3xl font-bold text-white">
							10+
						</h3>
						<p className="text-sm sm:text-base text-white">
							Industries Served
						</p>
					</div>
				</div>

				{/* Mission and Vision Section */}
				<div className="mt-6 sm:mt-12 flex flex-col space-y-8 sm:space-y-16 px-4 sm:px-12 lg:px-20">
					{/* Mission Section */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
						<div className="flex flex-col justify-center h-full space-y-4 sm:space-y-6 border-l-2 border-blue-500 pl-4 sm:pl-6">
							<h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center sm:text-left">
								Our Mission
							</h2>
							<p className="text-sm sm:text-lg text-gray-600 leading-relaxed text-center sm:text-left">
								To be a globally recognized leader in business
								development, project execution, and talent
								empowerment, driving sustainable growth across
								industries.
							</p>
						</div>
						<div className="relative w-full h-48 sm:h-64 md:h-80">
							<Image
								src="/images/mission.png"
								alt="Mission"
								fill
								className="object-cover rounded-lg"
							/>
						</div>
					</div>

					{/* Vision Section */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
						<div className="relative w-full h-48 sm:h-64 md:h-80">
							<Image
								src="/images/vision.png"
								alt="Vision"
								fill
								className="object-cover rounded-lg"
							/>
						</div>
						<div className="flex flex-col justify-center h-full space-y-4 sm:space-y-6 border-l-2 border-blue-500 pl-4 sm:pl-6">
							<h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center sm:text-left">
								Our Vision
							</h2>
							<p className="text-sm sm:text-lg text-gray-600 leading-relaxed text-center sm:text-left">
								We deliver world-class services by leveraging
								strategic partnerships, innovation, and
								expertise to create long-term impact for
								governments, businesses, and individuals
							</p>
						</div>
					</div>
				</div>

				{/* Why Choose Us Section */}
				<div className="grid grid-cols-1 md:grid-cols-2 mt-6 sm:mt-12 py-6 sm:py-12 gap-6 sm:gap-8 px-4 sm:px-12">
					{/* Header and Subheader */}
					<div className="flex flex-col justify-center items-center">
						<h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
							Why Choose Us
						</h2>
						<p className="text-sm sm:text-lg text-gray-600 max-w-2xl text-center">
							Partner with our proven expertise, global reach,
							innovation-driven strategies, and commitment to
							sustainability.
						</p>
					</div>

					{/* List Section */}
					<div className="flex flex-col justify-center">
						<div className="space-y-3 sm:space-y-4">
							{listItems.map((item, index) => (
								<div
									key={index}
									className="border-b border-gray-200 p-3 sm:p-4 rounded-lg">
									<div className="flex items-center">
										<span className="text-xl sm:text-2xl font-medium text-gray-600 mr-3 sm:mr-4">
											+
										</span>
										<h3 className="font-medium text-gray-600 text-sm sm:text-lg whitespace-normal">
											{item}
										</h3>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Call-to-Action Section */}
				<div className="mb-8 sm:mb-16 bg-blue-900 text-white shadow-lg rounded-lg overflow-hidden p-6 sm:p-8 text-center">
					<h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
						Ready to Transform Your Business?
					</h2>
					<p className="text-sm sm:text-lg mb-6 sm:mb-8">
						Partner with us for expert guidance and strategies that
						drive growth and success.
					</p>
					<div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
						<button className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition duration-300">
							Contact Us
						</button>
						<button className="bg-white text-blue-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-100 transition duration-300">
							Get Your Free Consultation
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
