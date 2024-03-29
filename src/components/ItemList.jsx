import { addItem } from "../Utils/cartSlice";
import { CDN_URL } from "../Utils/constants";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {

	const dispatch = useDispatch();

	const handleAddItem = (item) => {
		// Dispatch an action
		dispatch(addItem(item));
	};

	return (
		<div>
			{items.map((item) => (
				<div
					key={item.card.info.id}
					className="p-0 m-2 border-b-2 border-gray-200 text-left flex justify-between"
				>
					<div className="ml-2 w-9/12">
						<div className="flex flex-col">
							{/* Name of the dish  */}
							<span className="font-semibold text-blue-800 mt-2">
								{item.card.info.name}{" "}
							</span>

							{/* Price */}
							<span className="font-semibold text-green-600">
								{" "}
								₹{" "}
								{item.card.info.price
									? item.card.info.price / 100
									: item.card.info.defaultPrice / 100}
							</span>
						</div>
						{/* The Description of the dish  */}
						<p className="text-xs mt-2">{item.card.info.description}</p>
					</div>

					<div>
						<button
							className="absolute bg-green-500 text-white p-1 ml-9 rounded-md shadow-lg hover:bg-green-600"
							onClick={() => handleAddItem(item)}
						>
							Add+
						</button>
						<img
							className="w-[100px] h-[100px] rounded-lg m-2"
							src={CDN_URL + item.card.info.imageId}
							alt="Food Image"
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default ItemList;
