"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function FAQSection() {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	const faqs = [
		{
			question: "What services do you offer?",
			answer: "We offer a wide range of services including business consulting, project management, and strategic planning tailored to your needs.",
		},
		{
			question: "What is your typical project timeline?",
			answer: "Our project timelines vary depending on the scope and complexity, but we ensure timely delivery with clear milestones and updates.",
		},
		{
			question: "How do I schedule a consultation?",
			answer: "You can schedule a consultation by contacting us via phone, email, or our online booking system. We’ll find a time that works for you.",
		},
		{
			question: "Do you provide ongoing support after the project?",
			answer: "Yes, we offer ongoing support and maintenance services to ensure your continued success after project completion.",
		},
		{
			question: "What industries do you specialize in?",
			answer: "We specialize in industries such as finance, healthcare, technology, and retail, providing tailored solutions for each sector.",
		},
		{
			question: "How are your consultants qualified?",
			answer: "Our consultants are highly qualified with years of industry experience and relevant certifications to deliver expert guidance.",
		},
	];

	return (
		<div className="max-w-6xl mx-auto mt-12 bg-white shadow-lg rounded-lg overflow-hidden p-8">
			<div className="flex flex-col justify-center items-center space-y-2 mb-6">
				{" "}
				<h2 className=" text-2xl md:text-3xl font-bold text-blue-900 text-center">
					Frequently Asked Questions
				</h2>
				<p className="text-base text-blue-700 text-center">
					Answers to Common Inquiries About Our <br /> Services
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{faqs.map((faq, index) => (
					<div key={index} className="space-y-4">
						<div
							className="border-b border-gray-200 pb-4 cursor-pointer flex justify-between items-center"
							onClick={() => toggleFAQ(index)}>
							<span className="text-base md:text-xl font-semibold text-blue-900">
								{faq.question}
							</span>
							{openIndex === index ? (
								<FiMinus className="text-blue-900" />
							) : (
								<FiPlus className="text-blue-900" />
							)}
						</div>
						<div
							className={`overflow-hidden transition-all duration-300 ease-in-out ${
								openIndex === index
									? "max-h-40 opacity-100"
									: "max-h-0 opacity-0"
							}`}>
							<p className="mt-2 text-blue-700">{faq.answer}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
