import { useState } from "react";
import ItemList from "./ItemList";
import DownArrow from "../Images/chevron-down-solid.svg";
import UpArrow from "../Images/chevron-up-solid.svg";

const RestaurantCategory = ({ data }) => {
	// State to manage the visibility of Accordion body
	const [isVisible, setIsVisible] = useState(true);
	// State to manage the arrow direction
	const [arrow, setArrow] = useState(true);

	// Function to toggle Accordion body visibility and arrow direction
	const toggleAccordion = () => {
		setIsVisible(!isVisible); // Toggles visibility of Accordion body
		setArrow(!arrow); // Toggles arrow direction
	};

	return (
		<div>
			<div className="w-6/12 mx-auto my-8 bg-gray-300 shadow-lg p-3">
				{/* Accordion Header */}
				<div
					className="flex justify-between cursor-pointer"
					onClick={toggleAccordion}
				>
					<span className="font-bold text-lg mb-2 ">
						{data.title} ({data.itemCards.length})
					</span>
					<img src={arrow ? UpArrow : DownArrow} alt="Arrow" />
				</div>

				{/* Accordion Body */}
				{/* Show ItemList if isVisible is true, else hide */}
				{isVisible ? <ItemList items={data.itemCards} /> : isVisible}
			</div>
		</div>
	);
};

export default RestaurantCategory;
