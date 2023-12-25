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
				<button
					className="bg-red-600 mb-6 p-2 text-white rounded-lg"
					onClick={handleClearCart}
				>
					Clear Cart
				</button>

        {/* {cartItems.length == 0 && "Add the items"} */}
				<ItemList items={cartItems} />
			</div>
		</div>
	);
};

export default Cart;
