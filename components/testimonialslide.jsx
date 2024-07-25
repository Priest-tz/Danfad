"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Testimonialslide = () => {
	const cards = [
		{
			imgSrc: "https://res.cloudinary.com/oluwadara/image/upload/v1718871434/Union_ease/Ellipse_49_fu5qw1.png",
			testimonial:
				"Thanks to the exceptional guidance provided by this consultancy, our project management processes have become significantly more streamlined and efficient. Their expertise is truly unparalleled.",
			name: "Alice Johnson",
			designation: "Project Manager",
		},
		{
			imgSrc: "https://res.cloudinary.com/oluwadara/image/upload/v1718871434/Union_ease/Ellipse_49_1_wxtwwf.png",
			testimonial:
				"The organizational planning services offered by this consultancy have been a game-changer for our business. Their strategies are insightful and actionable, leading to tangible improvements.",
			name: "Michael Smith",
			designation: "CEO",
		},
		{
			imgSrc: "https://res.cloudinary.com/oluwadara/image/upload/v1718871434/Union_ease/Ellipse_49_2_gxvmdz.png",
			testimonial:
				"Our stakeholder engagement has never been better. The tailored strategies provided have enhanced communication and collaboration across the board.",
			name: "Sarah Brown",
			designation: "Communications Director",
		},
		{
			imgSrc: "https://res.cloudinary.com/oluwadara/image/upload/v1718872753/Union_ease/Ellipse_49_njpyhz.png",
			testimonial:
				"Enrolling in their PMP courses was one of the best decisions I've made for my career. The seminars were insightful, and the instructors were incredibly knowledgeable.",
			name: "David Williams",
			designation: "Senior Project Manager",
		},
		{
			imgSrc: "https://res.cloudinary.com/oluwadara/image/upload/v1718872753/Union_ease/Ellipse_49_1_w3sbtz.png",
			testimonial:
				"The risk management strategies provided have been instrumental in mitigating potential issues before they escalate. Their proactive approach is highly commendable.",
			name: "Emma Davis",
			designation: "Risk Manager",
		},
		{
			imgSrc: "https://res.cloudinary.com/oluwadara/image/upload/v1718872753/Union_ease/Ellipse_49_1_w3sbtz.png",
			testimonial:
				"The risk management strategies provided have been instrumental in mitigating potential issues before they escalate. Their proactive approach is highly commendable.",
			name: "Emma Davis",
			designation: "Risk Manager",
		},
		{
			imgSrc: "https://res.cloudinary.com/oluwadara/image/upload/v1718872753/Union_ease/Ellipse_49_1_w3sbtz.png",
			testimonial:
				"The risk management strategies provided have been instrumental in mitigating potential issues before they escalate. Their proactive approach is highly commendable.",
			name: "Emma Davis",
			designation: "Risk Manager",
		},
		{
			imgSrc: "https://res.cloudinary.com/oluwadara/image/upload/v1718871434/Union_ease/Ellipse_49_fu5qw1.png",
			testimonial:
				"Thanks to the exceptional guidance provided by this consultancy, our project management processes have become significantly more streamlined and efficient. Their expertise is truly unparalleled.",
			name: "Alice Johnson",
			designation: "Project Manager",
		},
		{
			imgSrc: "https://res.cloudinary.com/oluwadara/image/upload/v1718871434/Union_ease/Ellipse_49_1_wxtwwf.png",
			testimonial:
				"The organizational planning services offered by this consultancy have been a game-changer for our business. Their strategies are insightful and actionable, leading to tangible improvements.",
			name: "Michael Smith",
			designation: "CEO",
		},
		{
			imgSrc: "https://res.cloudinary.com/oluwadara/image/upload/v1718871434/Union_ease/Ellipse_49_2_gxvmdz.png",
			testimonial:
				"Our stakeholder engagement has never been better. The tailored strategies provided have enhanced communication and collaboration across the board.",
			name: "Sarah Brown",
			designation: "Communications Director",
		},
		{
			imgSrc: "https://res.cloudinary.com/oluwadara/image/upload/v1718871434/Union_ease/Ellipse_49_fu5qw1.png",
			testimonial:
				"Thanks to the exceptional guidance provided by this consultancy, our project management processes have become significantly more streamlined and efficient. Their expertise is truly unparalleled.",
			name: "Alice Johnson",
			designation: "Project Manager",
		},
		{
			imgSrc: "https://res.cloudinary.com/oluwadara/image/upload/v1718871434/Union_ease/Ellipse_49_1_wxtwwf.png",
			testimonial:
				"The organizational planning services offered by this consultancy have been a game-changer for our business. Their strategies are insightful and actionable, leading to tangible improvements.",
			name: "Michael Smith",
			designation: "CEO",
		},
		{
			imgSrc: "https://res.cloudinary.com/oluwadara/image/upload/v1718871434/Union_ease/Ellipse_49_2_gxvmdz.png",
			testimonial:
				"Our stakeholder engagement has never been better. The tailored strategies provided have enhanced communication and collaboration across the board.",
			name: "Sarah Brown",
			designation: "Communications Director",
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);
	const [windowWidth, setWindowWidth] = useState(
		typeof window !== "undefined" ? window.innerWidth : 0
	);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const handleResize = () => setWindowWidth(window.innerWidth);
			window.addEventListener("resize", handleResize);
			return () => window.removeEventListener("resize", handleResize);
		}
	}, [handleNext]);

	useEffect(() => {
		const interval = setInterval(() => {
			handleNext();
		}, 5000); // Change slides every 3 seconds

		return () => clearInterval(interval);
	}, [currentIndex, windowWidth]);

	const handlePrev = () => {
		const newIndex = currentIndex === 0 ? 0 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const handleNext = () => {
		const maxIndex =
			windowWidth < 768 ? cards.length - 1 : cards.length - 3;
		const newIndex = currentIndex === maxIndex ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const getTransformValue = () => {
		return windowWidth < 768
			? `translateX(-${currentIndex * 100}%)`
			: `translateX(-${currentIndex * 33.3333}%)`;
	};

	return (
		<div className="w-full overflow-hidden">
			<div
				className="flex transition-transform duration-500"
				style={{
					transform: getTransformValue(),
				}}>
				{cards.map((card, index) => (
					<div key={index} className="flex-shrink-0 w-full md:w-1/3">
						<div className="bg-white rounded-lg shadow-lg m-4 p-6 flex flex-col justify-between min-h-[550px] gap-6">
							<Image
								src={card.imgSrc}
								alt={card.name}
								width={0}
								height={0}
								className="w-16 h-16 rounded-full mx-auto"
							/>
							<span className="text-lg md:text-xl font-light leading-relaxed text-center">
								&quot;{card.testimonial}&quot;
							</span>
							<div className="flex flex-col items-center">
								<span className="text-lg text-primary font-bold">
									{card.name}
								</span>
								<span className="text-sm text-gray-500">
									{card.designation}
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Testimonialslide;
