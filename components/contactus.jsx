"use client";
import FAQSection from "./faq";
import Footer from "./footer";

export default function ContactPage() {
	return (
		<div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
			{/* Header Section */}
			<div className="flex flex-col justify-center items-center p-6 mb-12">
				<h1 className="text-3xl font-bold text-black">
					Contact & Support
				</h1>
				<span className="mt-2 text-base text-gray-800 text-center">
					We&apos;re here to assist you. Whether it&apos;s inquiries,
					consultations, or support,
					<br /> don&apos;t hesitate to reach out.
				</span>
			</div>

			{/* Contact Form and Contact Information */}
			<div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-16">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Left Column: Contact Form */}
					<div className="p-8">
						<h2 className="text-3xl font-bold text-blue-900 mb-6">
							Get in Touch
						</h2>
						<form className="space-y-6">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-blue-900">
									Full Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
									placeholder="Enter your full name"
									required
								/>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-blue-900">
									Email Address
								</label>
								<input
									type="email"
									id="email"
									name="email"
									className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
									placeholder="Enter your email address"
									required
								/>
							</div>

							<div>
								<label
									htmlFor="phone"
									className="block text-sm font-medium text-blue-900">
									Phone Number
								</label>
								<input
									type="tel"
									id="phone"
									name="phone"
									className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
									placeholder="Enter your phone number"
								/>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-blue-900">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									rows="4"
									className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
									placeholder="How can we assist you?"
									required></textarea>
							</div>

							<div>
								<button
									type="submit"
									className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
									Submit
								</button>
							</div>
						</form>
					</div>

					{/* Right Column: Contact Information */}
					<div className="bg-blue-50 p-8">
						{/* Call Us Section */}
						<div className="mb-8">
							<h3 className="text-2xl font-semibold text-blue-900">
								Call Us
							</h3>
							<p className="mt-2 text-blue-700">
								Monday-Friday, 9:00 AM - 6:00 PM
							</p>
							<p className="mt-2 text-blue-700 font-medium">
								+44 161 987 6543
							</p>
							<p className="mt-2 text-blue-700 font-medium">
								+44 161 987 6543
							</p>
						</div>

						{/* Email Support Section */}
						<div className="mb-8">
							<h3 className="text-2xl font-semibold text-blue-900">
								Email Support
							</h3>
							<p className="mt-2 text-blue-700">
								Email us & we will get back to you within 24
								hours.
							</p>
							<p className="mt-2 text-blue-700 font-medium">
								support@apsoadvisory.com
							</p>
						</div>

						{/* Visit Us Section */}
						<div>
							<h3 className="text-2xl font-semibold text-blue-900">
								Manchester, UK
							</h3>
							<p className="mt-2 text-blue-700">
								Visit our office Monday-Friday, 9:00 AM - 5:00
								PM
							</p>
							<p className="mt-2 text-blue-700 font-medium">
								1234 Business Lane, Sville 100, London, UK
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Frequently Asked Questions Section */}
			<div className="mb-16">
				<FAQSection />
			</div>

			{/* Call-to-Action Section */}
			<div className="mb-16 bg-blue-900 text-white shadow-lg rounded-lg overflow-hidden p-8 text-center">
				<h2 className="text-3xl font-bold mb-6">
					Ready to Transform Your Business?
				</h2>
				<p className="text-lg mb-8">
					Partner with us for expert guidance and strategies that
					drive growth and success.
				</p>
				<div className="flex flex-col md:flex-row justify-center items-center gap-4">
					<button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
						Contact Us
					</button>
					<button className="bg-white text-blue-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
						Get Your Free Consultation
					</button>
				</div>
			</div>

			{/* Footer Section */}
			<Footer />
		</div>
	);
}
