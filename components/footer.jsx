"use client";

export default function Footer() {
	return (
		<footer className="bg-white text-gray-800 py-8 sm:py-12">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Footer Content */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
					{/* Our Services Section */}
					<div>
						<h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6">
							Our Services
						</h3>
						<ul className="space-y-2 sm:space-y-4">
							<li>
								<a
									href="#"
									className="text-sm sm:text-base text-gray-500 hover:text-black transition duration-300">
									Business Strategy Consulting
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-sm sm:text-base text-gray-500 hover:text-black transition duration-300">
									Financial Advisory
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-sm sm:text-base text-gray-500 hover:text-black transition duration-300">
									Operational Efficiency
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-sm sm:text-base text-gray-500 hover:text-black transition duration-300">
									IT & Digital Transformation
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-sm sm:text-base text-gray-500 hover:text-black transition duration-300">
									Risk Management
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-sm sm:text-base text-gray-500 hover:text-black transition duration-300 font-semibold">
									Explore All Services
								</a>
							</li>
						</ul>
					</div>

					{/* Additional Sections (Placeholder) */}
					<div>
						<h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6">
							About Us
						</h3>
						<ul className="space-y-2 sm:space-y-4">
							<li>
								<a
									href="#"
									className="text-sm sm:text-base text-gray-500 hover:text-black transition duration-300">
									Our Story
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-sm sm:text-base text-gray-500 hover:text-black transition duration-300">
									Our Team
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-sm sm:text-base text-gray-500 hover:text-black transition duration-300">
									Careers
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6">
							Resources
						</h3>
						<ul className="space-y-2 sm:space-y-4">
							<li>
								<a
									href="#"
									className="text-sm sm:text-base text-gray-500 hover:text-black transition duration-300">
									Blog
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-sm sm:text-base text-gray-500 hover:text-black transition duration-300">
									Case Studies
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-sm sm:text-base text-gray-500 hover:text-black transition duration-300">
									Whitepapers
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6">
							Contact Us
						</h3>
						<ul className="space-y-2 sm:space-y-4">
							<li>
								<a
									href="#"
									className="text-sm sm:text-base text-gray-500 hover:text-black transition duration-300">
									+44 161 987 6543
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-sm sm:text-base text-gray-500 hover:text-black transition duration-300">
									support@apsoadvisory.com
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-sm sm:text-base text-gray-500 hover:text-black transition duration-300">
									1234 Business Lane, Sville 100, London, UK
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Footer Bottom */}
				<div className="border-t border-blue-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
					<p className="text-sm sm:text-base text-gray-500">
						© 2023 All Encompassing Global Consult. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
