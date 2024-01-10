import React from "react";

const ContactUs = () => {
	return (
		<div className="bg-gray-100 min-h-screen py-8">
			<div className="container mx-auto px-1">
				<h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
					Contact Us
				</h1>
				<div className="max-w-lg mx-auto">
					<p className="text-lg leading-relaxed text-gray-700">
						If you have any questions, feedback, or inquiries, please feel free
						to get in touch with us. Our dedicated support team is here to
						assist you.
					</p>
					<div className="mt-6">
						<h2 className="text-xl font-semibold mb-2 text-gray-800">
							Reach Out to Us
						</h2>
						<ul className="text-lg text-gray-700">
							<li>Email: support@foodalix.com</li>
							<li>Phone: +7896596890</li>
							<li>Address: 123 Main Street, Pune, India</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
