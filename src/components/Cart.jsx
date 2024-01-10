import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
	const cartItems = useSelector((store) => store.cart.items);
	const dispatch = useDispatch();

	const handleClearCart = () => {
		dispatch(clearCart());
	};

	return (
		<div className="text-center">
			{/* <ItemList> {cartItems}</ItemList> */}
			<h1 className="font-bold text-2xl mb-10">Cart</h1>
			<div className="w-6/12 mx-auto">
				{/*  Check if cart has items to display the Clear Cart button */}
				{cartItems.length > 0 && (
					<button
						className="bg-red-600 mb-6 p-2 text-white rounded-lg"
						onClick={handleClearCart}
					>
						Clear Cart
					</button>
				)}

				{cartItems.length == 0 && (
					<div className="bg-gray-100 rounded-lg p-6">
						<p className="text-xl font-bold mb-4">
							Your cart is hungry! It needs items.
						</p>
					</div>
				)}
				<ItemList items={cartItems} />
			</div>
		</div>
	);
};

export default Cart;
