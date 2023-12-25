import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
// Just like slice, appStore also have its own reducer
const appStore = configureStore({
	// This reducer is respomsible for modifying the appStore
	reducer: {
    
    // Slice-Name: Reducer-Name
		cart: cartReducer,
	},
});

export default appStore;
