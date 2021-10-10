import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";
import shopReducer from "./shop/shop.reducer";


const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    shop: shopReducer
});

export default rootReducer