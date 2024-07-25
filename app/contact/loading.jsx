"use client";

import React, { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";

const Loading = () => {
	const [isShown, setIsShown] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setIsShown(true), 2000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="flex items-center justify-center h-screen bg-gray-100">
			{isShown && (
				<TailSpin
					type="TailSpin"
					color="#007bff"
					height={80}
					width={80}
				/>
			)}
		</div>
	);
};

export default Loading;
