"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

export default function HeroSlider() {
	const [textIndex, setTextIndex] = useState(0);
	const [bgIndex, setBgIndex] = useState(0);
	const [fade, setFade] = useState(false);

	const slides = [
		{
			backgrounds: ["/images/b2b.jpg", "/images/b2b2.jpg"],
			texts: [
				{
					title: "Business-to-Business (B2B) Solutions",
					description:
						"We provide bespoke solutions for privately owned companies, including banks and enterprises. Our expertise ensures smooth project management, timely delivery, and results that exceed expectations.",
					buttonText: "Explore B2B Services",
				},
				{
					title: "Tailored Solutions for Enterprises",
					description:
						"From contract management to strategic execution, we deliver high-quality solutions tailored to your business needs.",
					buttonText: "Learn More About B2B",
				},
			],
		},
		{
			backgrounds: ["/images/ppp.jpg"],
			texts: [
				{
					title: "Public-Private Partnership (PPP)",
					description:
						"We collaborate with government agencies to deliver impactful projects from conception to completion, ensuring seamless execution and alignment with national priorities.",
					buttonText: "Discover PPP Projects",
				},
			],
		},
		{
			backgrounds: ["/images/talenthub.jpg", "/images/talenthub2.jpg"],
			texts: [
				{
					title: "Talent Hub and Incubation",
					description:
						"We identify, nurture, and develop individuals, helping them refine their skills and discover their unique strengths.",
					buttonText: "Join the Talent Hub",
				},
				{
					title: "Empowering the Next Generation",
					description:
						"Our Talent Hub is a launchpad for innovators and leaders. We provide mentorship, resources, and opportunities to help individuals thrive.",
					buttonText: "Explore Talent Programs",
				},
			],
		},
	];

	// Effect to switch text with fade transition within each slide
	useEffect(() => {
		const textInterval = setInterval(() => {
			setFade(true);
			setTimeout(() => {
				setTextIndex(
					(prevIndex) => (prevIndex + 1) % slides[0].texts.length
				);
				setBgIndex(
					(prevIndex) =>
						(prevIndex + 1) % slides[0].backgrounds.length
				);
				setFade(false);
			}, 500);
		}, 5000);
		return () => clearInterval(textInterval);
	}, []);

	return (
		<div className="relative" style={{ height: "calc(100vh - 64px)" }}>
			<Swiper
				modules={[Autoplay, Pagination, Navigation]}
				spaceBetween={0}
				slidesPerView={1}
				loop={true}
				autoplay={{ delay: 5000, disableOnInteraction: false }}
				pagination={{ clickable: true }}
				navigation={{
					prevEl: ".custom-prev",
					nextEl: ".custom-next",
				}}
				className="h-full w-full">
				{slides.map((slide, index) => (
					<SwiperSlide key={index}>
						<div
							className="flex h-full w-full items-center justify-center bg-cover bg-center relative transition-opacity duration-500"
							style={{
								backgroundImage: `url(${
									slide.backgrounds[
										bgIndex % slide.backgrounds.length
									]
								})`,
							}}>
							<div className="absolute inset-0 bg-black bg-opacity-50"></div>
							<div className="text-center text-white relative z-10 max-w-4xl px-4">
								<h1
									className={`text-4xl md:text-5xl font-bold mb-4 transition-opacity duration-500 ${
										fade ? "opacity-0" : "opacity-100"
									}`}>
									{
										slide.texts[
											textIndex % slide.texts.length
										].title
									}
								</h1>
								<p
									className={`text-lg md:text-xl mb-6 transition-opacity duration-500 ${
										fade ? "opacity-0" : "opacity-100"
									}`}>
									{
										slide.texts[
											textIndex % slide.texts.length
										].description
									}
								</p>
								<button
									className={`bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg text-md md:text-lg font-semibold transition-all duration-500 ${
										fade ? "opacity-0" : "opacity-100"
									}`}>
									{
										slide.texts[
											textIndex % slide.texts.length
										].buttonText
									}
								</button>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			{/* Custom navigation buttons */}
			<div className="hidden md:block custom-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white text-3xl md:text-4xl">
				❮
			</div>
			<div className="hidden md:block custom-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white text-3xl md:text-4xl">
				❯
			</div>
		</div>
	);
}
