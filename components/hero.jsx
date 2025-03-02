"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useMemo } from "react";

export default function HeroSlider() {
	const slides = useMemo(
		() => [
			{
				background: "/images/b2b2.jpg",
				text: {
					title: "Business-to-Business (B2B) Solutions",
					description:
						"We provide bespoke solutions for privately owned companies, including banks and enterprises. Our expertise ensures smooth project management, timely delivery, and results that exceed expectations.",
					buttonText: "Explore Services",
				},
				link: "/b2b",
			},
			{
				background: "/images/ppp.jpg",
				text: {
					title: "Public-Private Partnership (PPP)",
					description:
						"We collaborate with government agencies to deliver impactful projects from conception to completion, ensuring seamless execution and alignment with national priorities.",
					buttonText: "Explore",
				},
				link: "/ppp",
			},
			{
				background: "/images/talenthub2.jpg",
				text: {
					title: "Talent Incubation Hub",
					description:
						"We identify, nurture, and develop individuals, helping them refine their skills and discover their unique strengths. Our Talent Hub is a launchpad for innovators and leaders, providing mentorship, resources, and opportunities to help individuals thrive.",
					buttonText: "Join the Talent Hub",
				},
				link: "/tih",
			},
		],
		[]
	);

	return (
		<div className="relative" style={{ height: "calc(100vh - 64px)" }}>
			<Swiper
				modules={[Autoplay, Pagination, Navigation, EffectFade]}
				spaceBetween={0}
				slidesPerView={1}
				loop={true}
				autoplay={{ delay: 10000, disableOnInteraction: false }}
				pagination={{ clickable: true }}
				navigation={{
					prevEl: ".custom-prev",
					nextEl: ".custom-next",
				}}
				effect="fade"
				fadeEffect={{ crossFade: true }}
				speed={1500}
				className="h-full w-full">
				{slides.map((slide, index) => (
					<SwiperSlide key={index}>
						<div
							className="flex h-full w-full items-center justify-center bg-cover bg-center relative transition-opacity duration-1000 ease-in-out"
							style={{
								backgroundImage: `url(${slide.background})`,
							}}>
							<div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-1000 ease-in-out"></div>
							<div className="text-center text-white relative z-10 max-w-4xl px-4 transition-opacity duration-1000 ease-in-out">
								<h1 className="text-4xl md:text-5xl font-bold mb-4 opacity-0 animate-fadeIn">
									{slide.text.title}
								</h1>
								<p className="text-lg md:text-xl mb-6 opacity-0 animate-fadeIn delay-300">
									{slide.text.description}
								</p>
								<a
									href={slide.link} // Added href to the link
									className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg text-md md:text-lg font-semibold opacity-0 animate-fadeIn delay-500">
									{slide.text.buttonText}
								</a>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			{/* Navigation Arrows */}
			<div className="hidden md:block custom-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white text-3xl md:text-4xl">
				❮
			</div>
			<div className="hidden md:block custom-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white text-3xl md:text-4xl">
				❯
			</div>
		</div>
	);
}
