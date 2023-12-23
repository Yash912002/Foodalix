import { CDN_URL } from "../Utils/constants";
import {useContext} from 'react';
import UserInfo from "../Utils/userContext";


const ResCard = (props) => {
	const {loggedInUser} = useContext(UserInfo)
	const { resData } = props;

	// Optional chaining
	const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
		resData?.info;

	return (
		<div className="m-4 p-4 w-[300px] rounded-md bg-blue-200">
			<img
				className="rounded-md mb-4"
				src={CDN_URL + cloudinaryImageId}
				alt="Food Image"
			/>

			<div className="text-center">
				{/* <Link to={"/restaurants/" + resData.info.id} key={resData.info.id}>
				</Link> */}

				<h2 className="font-bold py-2 text-lg"> {name} </h2>
				<button className="p-2 rounded-lg text-white bg-green-500 mb-4">
					{costForTwo}
				</button>
				<h3 className="text-green-700 font-bold"> {avgRating} stars</h3>
				<h4 className="mb-4"> {cuisines.join(", ")}</h4>
				<h1 className="font-bold">{loggedInUser}</h1>
			</div>
		</div>
	);
};

/* Creating a Higher Order Component */
// Input => ResCard
// output => ResCard with promoted label

// PromotedLabel is a fucntion which will take Rescard as input &
// return component (rescard with promoted label) &
// a component returns a piece of JSX

export const PromotedLabel = (ResCard) => {
	return (props) => {
		return (
			<div>
				<label className="absolute bg-blue-500 text-white p-2 ml-4 rounded-lg">
					{" "}
					Promoted{" "}
				</label>
				<ResCard {...props} />
			</div>
		);
	};
};

export default ResCard;
