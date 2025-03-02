import Image from "next/image";

const PublicPrivatePartnership = () => {
	return (
		<div className="bg-gray-50 py-12">
			<div className="relative h-64 sm:h-96 bg-blue-900 flex items-center justify-center">
				<Image
					src="/images/ppp-hero.jpg"
					alt="PPP Hero Image"
					layout="fill"
					objectFit="cover"
					className="opacity-50"
				/>
				<div className="relative z-10 text-center px-4">
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
						Public-Private Partnership (PPP) Solutions
					</h1>
					<p className="text-base sm:text-lg md:text-xl text-white">
						Bridging the Gap Between Public Policy and Private
						Sector Innovation
					</p>
				</div>
			</div>

			<div className="container mx-auto px-4 sm:px-6 py-12">
				<div className="text-center max-w-2xl mx-auto">
					<h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
						Driving Sustainable Development Through PPP
					</h2>
					<p className="text-gray-600">
						At All-Encompassing Global Consult Limited, we
						specialize in facilitating Public-Private Partnerships
						(PPP) that drive sustainable development, infrastructure
						growth, and economic transformation. Our expertise lies
						in aligning government initiatives with private sector
						efficiency, ensuring mutually beneficial collaborations
						that deliver long-term value.
					</p>
				</div>
			</div>

			<div className="bg-white py-12">
				<div className="container mx-auto px-4 sm:px-6">
					<h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8 sm:mb-12">
						Our PPP Consulting Services
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="bg-gray-100 p-6 rounded-lg shadow-lg">
							<h3 className="text-xl font-semibold text-blue-800 mb-4">
								PPP Structuring & Advisory
							</h3>
							<ul className="list-disc list-inside text-gray-600">
								<li>
									Feasibility studies & project viability
									assessment
								</li>
								<li>
									PPP framework development & policy alignment
								</li>
								<li>
									Risk allocation & stakeholder engagement
									strategies
								</li>
							</ul>
						</div>

						<div className="bg-gray-100 p-6 rounded-lg shadow-lg">
							<h3 className="text-xl font-semibold text-blue-800 mb-4">
								Infrastructure Development & Investment
							</h3>
							<ul className="list-disc list-inside text-gray-600">
								<li>
									Project financing & investment structuring
								</li>
								<li>Public infrastructure development</li>
								<li>
									Smart cities & urban development consulting
								</li>
							</ul>
						</div>

						<div className="bg-gray-100 p-6 rounded-lg shadow-lg">
							<h3 className="text-xl font-semibold text-blue-800 mb-4">
								Government Policy & Regulatory Compliance
							</h3>
							<ul className="list-disc list-inside text-gray-600">
								<li>
									Policy formulation & regulatory alignment
								</li>
								<li>
									Public sector reform & governance advisory
								</li>
								<li>Compliance frameworks for PPP projects</li>
							</ul>
						</div>

						<div className="bg-gray-100 p-6 rounded-lg shadow-lg">
							<h3 className="text-xl font-semibold text-blue-800 mb-4">
								Private Sector Engagement & Investment
								Facilitation
							</h3>
							<ul className="list-disc list-inside text-gray-600">
								<li>
									Investor matchmaking & business consortium
									formation
								</li>
								<li>Risk assessment & mitigation strategies</li>
								<li>
									Performance monitoring & impact assessment
								</li>
							</ul>
						</div>

						<div className="bg-gray-100 p-6 rounded-lg shadow-lg">
							<h3 className="text-xl font-semibold text-blue-800 mb-4">
								Sustainable Development & ESG Advisory
							</h3>
							<ul className="list-disc list-inside text-gray-600">
								<li>
									Green financing & sustainable infrastructure
									projects
								</li>
								<li>
									Environmental, Social, and Governance (ESG)
									compliance
								</li>
								<li>
									Social impact assessment & community
									engagement
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="container mx-auto px-4 sm:px-6 py-12">
				<h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8 sm:mb-12">
					Why Choose Us for PPP Advisory?
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					<div className="text-center">
						<div className="bg-blue-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
							<Image
								src="/icons/government-icon.svg"
								alt="Government Icon"
								width={40}
								height={40}
							/>
						</div>
						<h3 className="text-xl font-semibold text-blue-800 mb-2">
							Extensive Government & Private Sector Experience
						</h3>
						<p className="text-gray-600">
							Our consultants have first-hand experience working
							with governments, regulatory bodies, and private
							enterprises.
						</p>
					</div>

					<div className="text-center">
						<div className="bg-blue-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
							<Image
								src="/icons/profit-icon.svg"
								alt="Profit Icon"
								width={40}
								height={40}
							/>
						</div>
						<h3 className="text-xl font-semibold text-blue-800 mb-2">
							Profitability & Economic Growth Focus
						</h3>
						<p className="text-gray-600">
							We structure PPP projects to ensure financial
							sustainability and long-term economic impact.
						</p>
					</div>

					<div className="text-center">
						<div className="bg-blue-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
							<Image
								src="/icons/global-icon.svg"
								alt="Global Icon"
								width={40}
								height={40}
							/>
						</div>
						<h3 className="text-xl font-semibold text-blue-800 mb-2">
							Global Expertise with Local Insights
						</h3>
						<p className="text-gray-600">
							We combine international best practices with local
							market knowledge for successful PPP implementation.
						</p>
					</div>
				</div>
			</div>

			<div className="bg-blue-900 py-12">
				<div className="container mx-auto px-4 sm:px-6">
					<h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
						Key Sectors We Support in PPP Initiatives
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="bg-white p-6 rounded-lg shadow-lg">
							<h3 className="text-xl font-semibold text-blue-800 mb-4">
								Infrastructure & Transportation
							</h3>
							<p className="text-gray-600">
								Roads, rail, ports, airports, and more.
							</p>
						</div>

						<div className="bg-white p-6 rounded-lg shadow-lg">
							<h3 className="text-xl font-semibold text-blue-800 mb-4">
								Energy & Utilities
							</h3>
							<p className="text-gray-600">
								Power, renewable energy, water supply, and more.
							</p>
						</div>

						<div className="bg-white p-6 rounded-lg shadow-lg">
							<h3 className="text-xl font-semibold text-blue-800 mb-4">
								Healthcare & Pharmaceuticals
							</h3>
							<p className="text-gray-600">
								Hospitals, medical research, and more.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="container mx-auto px-4 sm:px-6 py-12 text-center">
				<h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
					Partner with Us for Impactful PPP Solutions
				</h2>
				<p className="text-gray-600 mb-8">
					All-Encompassing Global Consult Limited is your trusted
					partner in structuring, financing, and managing high-impact
					Public-Private Partnerships.
				</p>
				<button className="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
					Get Started
				</button>
			</div>
		</div>
	);
};

export default PublicPrivatePartnership;
