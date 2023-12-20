/* eslint-disable react-hooks/exhaustive-deps */
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
	const { resId } = useParams();
	// console.log(resId);
	const resInfo = useRestaurantMenu(resId);

	if (resInfo === null) return <Shimmer />;

	// const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;
	// const { itemCards } =	resInfo.cards[9].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

	// const { name, cuisines, costForTwoMessage } = resInfo.cards[0].card.card.info;
	const { itemCards } = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

	// console.log(resInfo);

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
		<div className="menu">
			<h1>{menu.name}</h1>
			<p>
				Cuisines :- {menu.cuisines.join(", ")} --- {menu.costForTwoMessage}
			</p>
			<h3>Menu</h3>
			<ol>
				{itemCards.map((item) => {
					// defaultPrice
					return (
						<li key={item.card.info.id}>
							{item.card.info.name} --
							{item.card.info.price
								? item.card.info.price / 100
								: item.card.info.defaultPrice / 100}
							Rs
						</li>
					);
				})}
			</ol>
		</div>
	);
};

export default RestaurantMenu;
