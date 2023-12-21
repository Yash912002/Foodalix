import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
	// console.log(data)
	return (
    <div>
			<div className="w-6/12 mx-auto my-8 bg-gray-300 shadow-lg p-3">
				{/* Accordion Header */}
				<div className="flex justify-between">
					<span className="font-bold text-lg mb-2">
						{data.title} ({data.itemCards.length})
					</span>
					<span> 🔽 </span>
				</div>

				{/* Accordion Body */}
				<ItemList items={data.itemCards} />
			</div>
		</div>
	);
};

export default RestaurantCategory;
