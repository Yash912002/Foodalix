import { createSlice } from "@reduxjs/toolkit";

// createSlice will return an object to cartSlice
const cartSlice = createSlice({
	name: "Cart",
	initialState: {
		items: [],
	},
	reducers: {
		// action: reducer() associated with it
		addItem: (state, action) => {
      // Mutating the 0riginal state here
			state.items.push(action.payload); // Here state is initial state which is a object
		},
		removeItem: (state, action) => {
			state.items.pop();
		},
		clearCart: (state) => {
			state.items.length = 0;
			// Alternate way
			// return { items: [] };
		},
	},
});

// We have to export actions and reducers separetly

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
