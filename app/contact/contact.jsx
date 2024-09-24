"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPhone,
	faEnvelope,
	faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import * as Yup from "yup";
import React from "react";

const ContactPage = () => {
	const [errors, setErrors] = React.useState({});
	const [formData, setFormData] = React.useState({
		firstName: "",
		lastName: "",
		phoneNumber: "",
		email: "",
		message: "",
	});

	const validationSchema = Yup.object().shape({
		firstName: Yup.string().required("First Name is required"),
		lastName: Yup.string().required("Last Name is required"),
		phoneNumber: Yup.string()
			.matches(/^\d{11}$/, "Phone number must be 11 digits")
			.required("Phone Number is required"),
		email: Yup.string()
			.email("Invalid email")
			.required("Email is required"),
		message: Yup.string().required("Message is required"),
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		validationSchema
			.validate(formData, { abortEarly: false })
			.then(() => {
				console.log("Form submitted:", formData);
				setFormData({
					firstName: "",
					lastName: "",
					phoneNumber: "",
					email: "",
					message: "",
				});
				setErrors({});
			})
			.catch((err) => {
				const newErrors = {};
				err.inner.forEach((error) => {
					newErrors[error.path] = error.message;
				});
				setErrors(newErrors);
			});
	};

	return (
		<div className="min-h-screen p-4">
			<div className="flex flex-col justify-center items-center text-center my-5 md:my-10">
				<span className="text-2xl font-bold block mb-2 md:text-7xl">
					Contact Us
				</span>
				<span className="text-sm text-gray-500 block md:text-base md:w-4/5">
					Have any question or feedback, feel free to reach out to us.
					We are always available to help.
				</span>
			</div>

			<div className="flex flex-col md:flex-row md:justify-around md:items-start md:px-12 md:gap-12">
				<div className="md:flex flex-col gap-2 hidden">
					<span className="text-xl font-semibold md:text-3xl">
						Reach Out to Us
					</span>
					<span className="text-lg font-normal md:text-sm md:w-full">
						Feel free to reach out to us, be it in person, visiting,
						or on our social media handles.
					</span>

					<div className="flex flex-col mt-4 gap-4">
						<span className="text-lg flex items-center gap-2">
							<FontAwesomeIcon
								icon={faPhone}
								className="text-gray-500"
							/>
							+447412666868
						</span>
						<span className="text-lg flex items-center gap-2">
							<FontAwesomeIcon
								icon={faEnvelope}
								className="text-gray-500"
							/>
							connect@danfadconsult.com
						</span>
						<span className="text-lg flex items-center gap-2">
							<FontAwesomeIcon
								icon={faLocationDot}
								className="text-gray-500"
							/>
							4 Mawson Court, 30 Gopsall Street, London, United
							Kingdom N1 5HN
						</span>
					</div>
				</div>

				<div className="flex-grow md:px-12 px-6 md:max-w-[40%]">
					<form
						onSubmit={handleSubmit}
						className="flex flex-col gap-6 text-sm">
						<div className="flex flex-col gap-4">
							<div className="flex flex-col">
								<label htmlFor="firstName" className="mb-1">
									First Name
								</label>
								<input
									type="text"
									id="firstName"
									name="firstName"
									value={formData.firstName}
									onChange={handleChange}
									className="p-2 border border-gray-300 rounded outline-none"
								/>
								{errors.firstName && (
									<div className="text-red-500 text-xs mt-1">
										{errors.firstName}
									</div>
								)}
							</div>
							<div className="flex flex-col">
								<label htmlFor="lastName" className="mb-1">
									Last Name
								</label>
								<input
									type="text"
									id="lastName"
									name="lastName"
									value={formData.lastName}
									onChange={handleChange}
									className="p-2 border border-gray-300 rounded outline-none"
								/>
								{errors.lastName && (
									<div className="text-red-500 text-xs mt-1">
										{errors.lastName}
									</div>
								)}
							</div>
						</div>

						<div className="flex flex-col gap-4">
							<div className="flex flex-col">
								<label htmlFor="phoneNumber" className="mb-1">
									Phone Number
								</label>
								<input
									type="text"
									id="phoneNumber"
									name="phoneNumber"
									value={formData.phoneNumber}
									onChange={handleChange}
									className="p-2 border border-gray-300 rounded"
								/>
								{errors.phoneNumber && (
									<div className="text-red-500 text-xs mt-1">
										{errors.phoneNumber}
									</div>
								)}
							</div>
							<div className="flex flex-col">
								<label htmlFor="email" className="mb-1">
									Email
								</label>
								<input
									type="text"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									className="p-2 border border-gray-300 rounded"
								/>
								{errors.email && (
									<div className="text-red-500 text-xs mt-1">
										{errors.email}
									</div>
								)}
							</div>
						</div>

						<div className="flex flex-col">
							<label htmlFor="message" className="mb-1">
								Message
							</label>
							<textarea
								id="message"
								name="message"
								value={formData.message}
								onChange={handleChange}
								className="p-3 border border-gray-300 rounded resize-none h-48 md:h-36"
							/>
							{errors.message && (
								<div className="text-red-500 text-xs mt-1">
									{errors.message}
								</div>
							)}
						</div>

						<button
							type="submit"
							className="bg-blue-600 hover:bg-blue-700 text-white md:text-lg text-sm font-light py-3 px-4 rounded-xl md:w-[40%]">
							Send Message
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
