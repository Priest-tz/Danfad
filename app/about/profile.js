import Image from "next/image";
import Gbami from "../../public/Assets/gbami.jpg";
import Jane from "../../public/Assets/jane.jpg";
import Bob from "../../public/Assets/bob.jpg";

const teamMembers = [
	{
		name: "Jesugbamigbe Daniel Fadipe",
		role: "Director",
		image: Gbami,
		overview:
			"John has over 15 years of experience in the consulting industry, leading teams to success.",
		qualifications:
			"MBA from Harvard Business School, Certified Management Consultant (CMC), PMP Certified",
	},
	{
		name: "Jane Smith",
		role: "Senior Consultant",
		image: Jane,
		overview:
			"Jane specializes in financial consulting and has helped numerous clients achieve financial stability.",
		qualifications: "CPA, CFA, MBA from Stanford University",
	},
	{
		name: "Bob Johnson",
		role: "Consultant",
		image: Bob,
		overview:
			"Bob is an expert in operational efficiency and has a knack for streamlining business processes.",
		qualifications:
			"Lean Six Sigma Black Belt, BSc in Business Administration from MIT",
	},
];

const Profile = () => {
	return (
		<div>
			<div className="bg-white py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
							About Us
						</h2>
						<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
							Who We Are
						</p>
						<p className="mt-4 max-w-2xl md:text-xl text-base text-gray-500 lg:mx-auto">
							We are a top consulting firm dedicated to helping
							businesses reach their full potential. Our team of
							experts offers complete solutions designed
							specifically for your unique needs. We work closely
							with you to understand your challenges and provide
							practical, easy-to-implement advice and strategies.
							Our goal is to ensure your success by guiding you
							every step of the way with clear and effective
							solutions.
						</p>
					</div>
				</div>
			</div>

			{/* Mission Statement */}
			<div className="bg-gray-50 py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
							Our Mission
						</h2>
						<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
							What Drives Us
						</p>
						<p className="mt-4 max-w-2xl text-base md:text-xl text-gray-500 lg:mx-auto">
							Our mission is to empower businesses through
							innovative solutions and strategic insights. We
							strive to build long-lasting partnerships based on
							trust and excellence.
						</p>
					</div>
				</div>
			</div>

			{/* Vision Statement */}
			<div className="bg-white py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
							Our Vision
						</h2>
						<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
							Our Future
						</p>
						<p className="mt-4 max-w-2xl md:text-xl text-base text-gray-500 lg:mx-auto">
							We envision a world where businesses of all sizes
							can thrive and innovate. Our goal is to be the go-to
							consultancy for companies seeking to navigate the
							complexities of the modern market.
						</p>
					</div>
				</div>
			</div>

			{/* Team Section */}
			<div className="bg-gray-100 py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
							Our Team
						</h2>
						<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
							Meet the Experts
						</p>
					</div>
					<div className="mt-10">
						<div className="grid gap-10 lg:grid-cols-3 sm:grid-cols-2">
							{teamMembers.map((member, index) => (
								<div
									key={index}
									className="bg-white rounded-xl shadow-lg overflow-hidden mx-4">
									<Image
										src={member.image}
										alt={`${member.name}'s picture`}
										width={500}
										height={500}
										className="w-full p-2 rounded-xl h-56 object-cover object-center"
									/>
									<div className="p-6">
										<h3 className="text-lg font-medium text-gray-900">
											{member.name}
										</h3>
										<p className="text-indigo-600">
											{member.role}
										</p>
										<p className="mt-2 text-gray-600">
											{member.overview}
										</p>
										<p className="mt-4 text-gray-500">
											<span className="font-semibold">
												Qualifications:
											</span>{" "}
											{member.qualifications}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
