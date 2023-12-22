import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
	const { resId } = useParams();
	// console.log(resId);
	const resInfo = useRestaurantMenu(resId);

	if (resInfo === null) return <Shimmer />;

	// const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;
	const { itemCards } =
		resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

	// console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

	const categories =
		resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
			(c) =>
				c.card?.card?.["@type"] ===
				"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
		);
	// console.log(categories);

	let menu;
	for (let i = 0; i < resInfo.cards.length; i++) {
		const card = resInfo.cards[i];

		if (card.card.card.info !== undefined) {
			menu = card.card.card.info;
			break;
		}
	}
	// console.log(menu);

	return (
		<div className="text-center">
			<h1 className="font-bold my-8 text-2xl">{menu.name}</h1>
			<p className="font-bold text-lg">
				Cuisines :- {menu.cuisines.join(", ")} --- {menu.costForTwoMessage}
			</p>

			{/* Categories Accordian */}

			{categories.map((category) => (
				<RestaurantCategory
					key={category?.card?.card?.title}
					data={category?.card?.card}
				/>
			))}
		</div>
	);
};

export default RestaurantMenu;
