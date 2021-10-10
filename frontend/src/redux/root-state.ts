
import { Collection } from "../model/Collection";
import { Item } from "../model/Item";
import { User } from "../model/User";

export type RootState = {
    cart: {
        hidden: boolean,
        cartItems: Array<Item>,
        isFetching: boolean,
    },
    shop: {
        collections: Array<Collection>,
        selectedCollection: Collection,
        isFetching: boolean,
        erroMessage: string
    },
    user: {
        currentUser: User,
        error: string,
        isLoading: boolean
    }
}