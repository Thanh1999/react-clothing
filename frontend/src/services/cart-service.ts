import customAxios from "./custom-axios";

class CartService {

    static getUserCart() {
        return customAxios.get('/cart')
            .then(({ data }) => data)
    }

    static addItemToCart(itemId: number) {
        return customAxios.post('cart-item', {
            "itemId": itemId
        }).then(({ data }) => data);
    }

    static updateItemToCart(itemId: number, quantity: number) {
        return customAxios.put('cart-item', {
            "itemId": itemId,
            "quantity": quantity
        }).then(({ data }) => data);
    }

    static deleteItemFromCart(itemId: number) {
        return customAxios.delete(`/cart-item/${itemId}`).then(({ data }) => data);
    }
}

export default CartService;