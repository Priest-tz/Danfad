import Head from "next/head";

export default function Services() {
	const services = [
		{
			title: "Project Management Consulting Services",
			description:
				"We provide expert guidance and support to help organizations implement and manage projects effectively. Our consultants work closely with your team to ensure that projects are delivered on time, within scope, and on budget.",
		},
		{
			title: "Organizational Planning",
			description:
				"Our organizational planning services are designed to help businesses align their strategies with their long-term goals. We assist in creating comprehensive plans that address resource allocation, process improvements, and performance metrics.",
		},
		{
			title: "Stakeholder Engagement",
			description:
				"Effective stakeholder engagement is crucial for project success. We offer strategies and tools to help you communicate with and manage the expectations of stakeholders, ensuring their buy-in and support throughout the project lifecycle.",
		},
		{
			title: "Project Management Professional Courses and Seminars",
			description:
				"Our professional development courses and seminars are tailored to enhance the skills and knowledge of your team. We offer training in project management methodologies, tools, and best practices to ensure your team is equipped to handle any project challenge.",
		},
	];

	return (
		<div className="bg-white min-h-screen flex flex-col items-center py-12">
			<Head>
				<title>Our Services - Consulting Company</title>
				<meta
					name="description"
					content="Explore the services offered by our consulting company, including project management, organizational planning, and professional development."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="max-w-4xl w-full px-4">
				<h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8 text-center">
					Our Services
				</h1>

				<div className="bg-white rounded-lg shadow-lg p-6 mb-8">
					<h2 className="text-2xl font-bold text-gray-900 mb-4">
						Welcome to Our Consulting Company
					</h2>
					<p className="text-lg text-gray-700">
						We are a dynamic and innovative company dedicated to
						providing exceptional project management solutions and
						professional development services. Our team of
						experienced consultants is committed to helping
						organizations achieve their goals through strategic
						planning, effective communication, and continuous
						improvement.
					</p>
				</div>

				<div className="bg-white rounded-lg shadow-lg p-6 mb-8">
					<h2 className="text-2xl font-bold text-gray-900 mb-4">
						Mission Statement
					</h2>
					<p className="text-lg text-gray-700">
						Our mission is to empower organizations by providing
						exceptional project management solutions and fostering
						professional growth through high-quality training and
						development programs. We strive to deliver innovative
						and tailored solutions that meet the unique needs of
						each client, ensuring their long-term success and
						growth.
					</p>
				</div>

				<div className="bg-white rounded-lg shadow-lg p-6 mb-8">
					<h2 className="text-2xl font-bold text-gray-900 mb-4">
						Vision Statement
					</h2>
					<p className="text-lg text-gray-700">
						Our vision is to be a leading consulting firm recognized
						for driving innovation and excellence in project
						management and professional development. We aim to
						contribute significantly to the success and growth of
						our clients by continuously improving our services and
						staying ahead of industry trends.
					</p>
				</div>

				<div className="bg-white rounded-lg shadow-lg p-6">
					<h2 className="text-2xl font-bold text-gray-900 mb-4">
						Our Services
					</h2>
					<ul className="text-lg text-gray-700">
						{services.map((service, index) => (
							<li key={index} className="mb-6">
								<h3 className="text-xl font-semibold text-gray-800">
									{service.title}
								</h3>
								<p className="text-md text-gray-700 mt-2">
									{service.description}
								</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
