import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
	const [Res, setRes] = useState([]);
	const [filterRes, setFilterRes] = useState([]);
	const [searchText, setSearchText] = useState("");

	useEffect(() => {
		fetchData();
	}, []);

	

	const fetchData = async () => {
		const data = await fetch(
			"https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D18.621055599465002%26lng%3D73.8306423049214%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
			// "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.621055599465002&lng=73.8306423049214&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);

		const jsonData = await data.json();

		// Optional chaining
		// const RestaurantData = jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

		let RestaurantData;

		for (let i = 0; i < jsonData?.data?.cards.length; i++) {
			const card = jsonData?.data?.cards[i];
			// Check if the sequence exists in the current card
			if (
				card?.card?.card?.gridElements?.infoWithStyle?.restaurants !== undefined
			) {
				// If the sequence is found, assign the data and break the loop
				RestaurantData =
					card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
				break;
			}
		}
		setRes(RestaurantData);
		setFilterRes(RestaurantData);
	};

	// Conditional rendering
	return Res.length === 0 ? (
		<Shimmer />
	) : (
		<>
			<div className="body">
				{/* Search bar */}
				<div className="flex">
					<input
						type="search"
						className="border border-solid border-black pl-2 pr-2 ml-9 mb-6 rounded-sm mr-4"
						value={searchText}
						onChange={(e) => {
							// Filter the restaurant cards and update the ui
							setSearchText(e.target.value);
						}}
					/>

					{/* Search button */}
					<button
						className="px-3 py-1 bg-blue-400 rounded-sm text-white mb-6 mr-4 "
						onClick={() => {
							const filterRes = Res.filter((r) => {
								return r.info.name
									.toLowerCase()
									.includes(searchText.toLowerCase());
							});
							setFilterRes(filterRes);
						}}
					>
						Search
					</button>

					{/* Top Rated Restaurant button  */}
					<button
						className="px-5 py-1 bg-orange-500 rounded-sm text-white mb-6 ml-4 mr-4"
						onClick={() => {
							const filteredRes = Res.filter((restaurant) => {
								return restaurant.info.avgRating > 4;
							});
							// setRes(filteredRes);
							setFilterRes(filteredRes);
						}}
					>
						Top Rated Restaurants
					</button>
				</div>

				{/* Restaurant Card and Info */}
				<div className="flex flex-wrap justify-evenly">
					{filterRes.map((restaurant) => (
						<Link
							to={"/restaurants/" + restaurant.info.id}
							key={restaurant.info.id}
						>
							<ResCard resData={restaurant} key={restaurant.info.id} />
						</Link>
					))}
				</div>
			</div>
		</>
	);
};

export default Body;
