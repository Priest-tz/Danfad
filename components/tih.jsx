import Image from "next/image";

const TalentIncubationHub = () => {
	return (
		<div className="bg-gray-50 py-12">
			<div className="relative bg-blue-900 text-white py-20 px-6">
				<div className="absolute inset-0">
					<Image
						src="/images/tih-hero-bg.jpg"
						alt="Talent Incubation Hub"
						layout="fill"
						objectFit="cover"
						className="opacity-50"
					/>
				</div>
				<div className="relative max-w-7xl mx-auto text-center">
					<h1 className="text-4xl md:text-6xl font-bold mb-4">
						Talent Incubation Hub (TIH)
					</h1>
					<p className="text-lg md:text-xl mb-8">
						Nurturing Excellence, Empowering Future Leaders
					</p>
					<p className="text-lg md:text-xl max-w-2xl mx-auto">
						At All-Encompassing Global Consult Limited, we believe
						that talent is the foundation of innovation and
						sustainable business growth. Our Talent Incubation Hub
						(TIH) is designed to identify, develop, and empower
						individuals and organizations with the skills,
						knowledge, and resources needed to thrive in today’s
						competitive landscape.
					</p>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-6 py-16">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div>
						<h2 className="text-3xl font-bold text-gray-900 mb-6">
							About Talent Incubation Hub
						</h2>
						<p className="text-gray-600 mb-6">
							TIH serves as a strategic talent accelerator,
							connecting high-potential professionals,
							entrepreneurs, and corporate leaders with
							world-class training, mentorship, and industry
							exposure. Our goal is to bridge the gap between
							potential and excellence, ensuring long-term success
							for individuals and businesses alike.
						</p>
					</div>
					<div className="relative h-64 md:h-96">
						<Image
							src="/images/tih-about.jpg"
							alt="About TIH"
							layout="fill"
							objectFit="cover"
							className="rounded-lg"
						/>
					</div>
				</div>
			</div>

			<div className="bg-white py-16">
				<div className="max-w-7xl mx-auto px-6">
					<h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
						Our Talent Incubation Hub Services
					</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{
								title: "Executive & Leadership Development",
								description:
									"C-Suite leadership training programs, business strategy & decision-making workshops, high-impact executive coaching & mentorship.",
								image: "/images/tih-service1.jpg",
							},
							{
								title: "Professional & Skills Development",
								description:
									"Industry-specific certification programs, financial modeling, risk management & business analytics training, digital transformation & technology upskilling.",
								image: "/images/tih-service2.jpg",
							},
							{
								title: "Entrepreneurship & Startup Incubation",
								description:
									"Business ideation & model refinement, access to investors, funding opportunities & startup grants, go-to-market strategy & growth acceleration.",
								image: "/images/tih-service3.jpg",
							},
							{
								title: "Corporate Talent Development Programs",
								description:
									"Workforce reskilling & succession planning, corporate training on regulatory compliance & risk mitigation, change management & organizational culture enhancement.",
								image: "/images/tih-service4.jpg",
							},
							{
								title: "Internship & Apprenticeship Programs",
								description:
									"Structured industry placements for young professionals, hands-on training & mentorship from industry leaders, career acceleration & job market readiness coaching.",
								image: "/images/tih-service5.jpg",
							},
							{
								title: "Innovation & Research Hub",
								description:
									"Think tank for policy innovation & business strategy, research & development (R&D) support for enterprises, AI, automation & emerging technology incubation.",
								image: "/images/tih-service6.jpg",
							},
						].map((service, index) => (
							<div
								key={index}
								className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
								<div className="relative h-48">
									<Image
										src={service.image}
										alt={service.title}
										layout="fill"
										objectFit="cover"
									/>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-bold text-gray-900 mb-4">
										{service.title}
									</h3>
									<p className="text-gray-600">
										{service.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="bg-blue-50 py-16">
				<div className="max-w-7xl mx-auto px-6">
					<h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
						Why Choose Our Talent Incubation Hub?
					</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{
								title: "Real-World Expertise & Industry-Relevant Training",
								description:
									"Our programs are designed by seasoned professionals, industry experts, and business leaders, ensuring practical, real-world knowledge that drives impact.",
							},
							{
								title: "Customized Learning & Development Solutions",
								description:
									"We provide tailored training and coaching programs to meet the unique needs of individuals, startups, and corporate organizations.",
							},
							{
								title: "Access to Global Networks & High-Value Partnerships",
								description:
									"TIH connects participants to industry leaders, global organizations, investors, and mentorship networks, opening doors to unparalleled career and business opportunities.",
							},
							{
								title: "Innovation-Driven Learning Environment",
								description:
									"We foster a culture of creativity, entrepreneurship, and problem-solving, ensuring that talent is future-ready and adaptable to changing global trends.",
							},
							{
								title: "Accelerated Career & Business Growth Opportunities",
								description:
									"Participants receive exclusive access to job placements, business incubation, funding opportunities, and executive mentorship, ensuring their long-term success.",
							},
						].map((reason, index) => (
							<div
								key={index}
								className="bg-white p-6 rounded-lg shadow-md">
								<h3 className="text-xl font-bold text-gray-900 mb-4">
									{reason.title}
								</h3>
								<p className="text-gray-600">
									{reason.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="bg-white py-16">
				<div className="max-w-7xl mx-auto px-6">
					<h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
						Who Can Benefit from TIH?
					</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							"Aspiring entrepreneurs & business leaders",
							"Corporate executives & mid-level managers",
							"High-potential professionals & recent graduates",
							"Organizations looking to upskill their workforce",
							"Government agencies & institutions focused on talent development",
						].map((benefit, index) => (
							<div
								key={index}
								className="bg-gray-100 p-6 rounded-lg shadow-md">
								<p className="text-gray-900 text-lg">
									{benefit}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="bg-blue-900 text-white py-20 px-6">
				<div className="max-w-7xl mx-auto text-center">
					<h2 className="text-4xl font-bold mb-6">
						Join the Talent Incubation Hub Today
					</h2>
					<p className="text-lg mb-8">
						Whether you are an individual looking to accelerate your
						career, an entrepreneur aiming to scale your startup, or
						a company seeking cutting-edge workforce development
						solutions, the Talent Incubation Hub (TIH) at
						All-Encompassing Global Consult Limited is your
						strategic partner for success.
					</p>
					<button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300">
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
};

export default TalentIncubationHub;
