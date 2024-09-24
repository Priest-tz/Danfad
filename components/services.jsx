import React from "react";

const services = [
	{
		title: "Project Management",
		description:
			"Our expert consultants help you streamline your projects, ensuring efficiency and success from start to finish.",
		icon: "📋",
	},
	{
		title: "Organizational Planning",
		description:
			"We assist in creating comprehensive organizational plans to align your business goals with actionable strategies.",
		icon: "🏢",
	},
	{
		title: "Stakeholder Engagement",
		description:
			"Engage your stakeholders effectively with our tailored strategies that enhance communication and collaboration.",
		icon: "🤝",
	},
	{
		title: "Project Management Professional Courses and Seminars",
		description:
			"Advance your skills with our PMP courses and seminars designed for professionals seeking certification and career growth.",
		icon: "🎓",
	},
];

const Services = () => {
	return (
		<div id="services" className="container mx-auto p-12">
			<h2 className="text-3xl font-bold text-center mb-8">
				Our Services
			</h2>
			<div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
				{services.map((service, index) => (
					<div
						key={index}
						className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
						<div className="text-4xl mb-4">{service.icon}</div>
						<h3 className="text-xl font-semibold mb-2">
							{service.title}
						</h3>
						<p className="text-gray-600">{service.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Services;
