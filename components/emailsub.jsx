import React from "react";

const Emailsub = () => {
	return (
		<div className="flex flex-col md:flex-row w-full justify-center items-center border-t border-b p-8 md:p-12 gap-4 md:gap-28">
			<div className="flex flex-col gap-1 md:pl-20 justify-start">
				<span className="text-xl font-semibold md:text-3xl">
					Subscribe to our newsletter
				</span>
				<span className="text-sm md:text-base">
					Get E-mail updates about our latest releases and offers
				</span>
			</div>
			<div className="flex flex-1 md:px-12 w-full">
				<form className="flex w-full md:w-[60%]">
					<input
						type="email"
						placeholder="Enter your email"
						className=" flex-grow text-base border rounded-l-md outline-none px-2"
					/>
					<button
						type="submit"
						className="bg-gradient-to-r from-blue-600 to-blue-700 hover:bg-blue-800 p-4 text-white border-none text-base rounded-r-md whitespace-nowrap">
						Subscribe
					</button>
				</form>
			</div>
		</div>
	);
};

export default Emailsub;
