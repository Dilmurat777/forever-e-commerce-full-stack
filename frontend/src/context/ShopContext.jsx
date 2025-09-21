import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";


const ShopContext = createContext();

const ShopContextProvider = (props) => {
	const currency = "$";
	const delivery_fee = 10;

	const value = {
		currency,
		delivery_fee,
		products,
	}

	return (
		<ShopContext.Provider value={value}>
			{props.children}
		</ShopContext.Provider>
	)
}

export {ShopContextProvider, ShopContext}