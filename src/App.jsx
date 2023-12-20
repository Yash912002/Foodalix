/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense } from "react";
import Shimmer from "./components/Shimmer";

const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
	return (
		<div className="App">
			<Header />
			<Outlet />
		</div>
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
				element: <About />,
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
