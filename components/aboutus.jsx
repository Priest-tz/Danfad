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

	return (
		<div className="bg-gray-100 py-12">
			<div className="max-w-4xl mx-auto px-4">
				<h1 className="text-4xl font-bold text-center mb-8">
					Driving Business Success through Expertise & Innovation
				</h1>
				<p className="text-lg text-gray-700 mb-8">
					With decades of expertise in business consulting, we
					specialize in helping companies navigate challenges,
					streamline operations, and unlock growth opportunities.
					Whether you’re scaling up, optimizing efficiency, or
					reinventing your strategy, our tailored solutions ensure
					sustainable success. Let’s shape the future of your business
					together.
				</p>

				<div className="mb-8">
					<Image
						src="/images/business-success.jpg"
						alt="Business Success"
						width={800}
						height={450}
						className="rounded-lg shadow-lg"
					/>
				</div>

				<div className="bg-white p-8 rounded-lg shadow-lg mb-8">
					<h2 className="text-2xl font-bold mb-6">
						Our Businesses Since 2005
					</h2>
					<p className="text-gray-700 mb-6">
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
					</p>

					<div className="mb-8">
						<Image
							src="/images/consulting-team.jpg"
							alt="Consulting Team"
							width={800}
							height={450}
							className="rounded-lg shadow-lg"
						/>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
						<div>
							<h3 className="text-3xl font-bold">20+</h3>
							<p className="text-gray-600">Years of Experience</p>
						</div>
						<div>
							<h3 className="text-3xl font-bold">100+</h3>
							<p className="text-gray-600">Successful Projects</p>
						</div>
						<div>
							<h3 className="text-3xl font-bold">80%</h3>
							<p className="text-gray-600">
								Client Retention Rate
							</p>
						</div>
						<div>
							<h3 className="text-3xl font-bold">50+</h3>
							<p className="text-gray-600">Industries Served</p>
						</div>
					</div>
				</div>

				{/* Mission Section */}
				<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center pb-12">
					<div>
						<h2 className="text-3xl font-bold text-gray-900">
							Our Mission
						</h2>
						<p className="mt-4 text-lg text-gray-600">
							To empower businesses with customized, innovative
							solutions that drive growth, efficiency, and
							long-term success, while focusing on delivering
							exceptional client experiences.
						</p>
					</div>
					<div className="relative h-64 md:h-80">
						<Image
							src="/images/mission-image.jpg"
							alt="Mission"
							layout="fill"
							objectFit="cover"
							className="rounded-lg"
						/>
					</div>
				</div>

				{/* Vision Section */}
				<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center pb-12">
					<div className="relative h-64 md:h-80 order-last md:order-first">
						<Image
							src="/images/vision-image.jpg"
							alt="Vision"
							layout="fill"
							objectFit="cover"
							className="rounded-lg"
						/>
					</div>
					<div>
						<h2 className="text-3xl font-bold text-gray-900">
							Our Vision
						</h2>
						<p className="mt-4 text-lg text-gray-600">
							To be a global leader in providing innovative and
							transformative solutions that empower businesses to
							thrive in a rapidly changing world.
						</p>
					</div>
				</div>

				{/* Why Choose Us Section */}
				<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center pb-12">
					<div className="relative h-96">
						<Image
							src="/images/why-choose-us.jpg"
							alt="Why Choose Us"
							layout="fill"
							objectFit="cover"
							className="rounded-lg"
						/>
					</div>
					<div>
						<h2 className="text-3xl font-bold text-gray-900 mb-6">
							Why Choose Us
						</h2>
						<div className="space-y-4">
							{accordionItems.map((item, index) => (
								<div
									key={index}
									className="border rounded-lg p-4 cursor-pointer"
									onClick={() => toggleAccordion(index)}>
									<div className="flex justify-between items-center">
										<h3 className="font-semibold">
											{item.title}
										</h3>
										<span>
											{activeIndex === index ? "-" : "+"}
										</span>
									</div>
									{activeIndex === index && (
										<p className="text-gray-600 mt-2">
											{item.content}
										</p>
									)}
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Call-to-Action Section */}
				<div className="mb-16 bg-blue-900 text-white shadow-lg rounded-lg overflow-hidden p-8 text-center">
					<h2 className="text-3xl font-bold mb-6">
						Ready to Transform Your Business?
					</h2>
					<p className="text-lg mb-8">
						Partner with us for expert guidance and strategies that
						drive growth and success.
					</p>
					<div className="flex flex-col md:flex-row justify-center items-center gap-4">
						<button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
							Contact Us
						</button>
						<button className="bg-white text-blue-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
							Get Your Free Consultation
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
