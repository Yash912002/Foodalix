import React from "react";

const About = () => {
	return (
		<div className="bg-gradient-to-r from-blue-200 to-green-200 min-h-screen py-8">
			<div className="container mx-auto px-4">
				<h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
					About Foodalix
				</h1>
				<div className="flex flex-col md:flex-row justify-center items-center">
					<div className="md:w-1/2 md:ml-4">
						<p className="text-lg leading-relaxed text-gray-700">
							Welcome to Foodalix, your ultimate destination for a delightful
							culinary experience! We are dedicated to bringing the best
							cuisines from top restaurants directly to your doorstep. Our
							platform empowers you to explore a diverse array of flavors and
							dishes without stepping out of your home.
						</p>
						<p className="text-lg leading-relaxed mt-4 text-gray-700">
							At Foodalix, we prioritize convenience and quality, ensuring that
							your food journey is seamless and satisfying. Our user-friendly
							interface makes browsing menus, placing orders, and tracking
							deliveries an effortless experience. We are committed to
							delivering excellence and ensuring your utmost satisfaction.
						</p>
						<p className="text-lg leading-relaxed mt-4 text-gray-700">
							From tantalizing pizzas to exotic Asian delicacies and comforting
							homestyle meals, Foodalix has a vast selection to satisfy every
							craving. Join us in exploring a world of flavors and culinary
							delights, all available at your fingertips with just a few clicks!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
