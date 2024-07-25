import React from "react";
import Testimonialslide from "./testimonialslide";

const Testimonials = () => {
	return (
		<div className="flex flex-col justify-center h-screen rounded-3xl px-4 md:px-8 m-5">
			<div className="w-full px-2 py-6 md:p-12">
				<div className="flex justify-between items-center mb-6">
					<div className="flex flex-col gap-3 items-start">
						<span className="text-tertiary text-lg md:text-sm">
							TESTIMONIALS
						</span>
						<span className="text-3xl md:text-6xl font-bold">
							What our customers say
						</span>
					</div>
				</div>
				<Testimonialslide />
			</div>
		</div>
	);
};

export default Testimonials;
