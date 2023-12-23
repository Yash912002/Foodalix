import ReactDOM from "react-dom/client";
import { lazy, Suspense, useEffect, useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserInfo from "./Utils/userContext";
import "./App.css";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const App = () => {
	const [name, setName] = useState();

	// Authentication
	useEffect(() => {
		// Make an API call and get username and password
		const data = { name: "Yash Bhavsar" };
		setName(data.name);
	}, []);

	return (
		<UserInfo.Provider value={{ loggedInUser: name , setName}}>
			<div className="App">
				<Header />
				<Outlet />
			</div>
		</UserInfo.Provider>
	);
};

const Approuter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: (
					<Suspense fallback={<Shimmer />}>
						<About />
					</Suspense>
				),
			},

			{
				path: "/contact",
				element: <ContactUs />,
			},

			{
				path: "/grocery",
				element: (
					<Suspense fallback={<Shimmer />}>
						<Grocery />
					</Suspense>
				),
			},

			{
				path: "/restaurants/:resId",
				element: <RestaurantMenu />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approuter} />);
