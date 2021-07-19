export const addItemToCart = (listItems, item) => {
    const existItem = listItems.find((cartItem) => cartItem.id === item.id)
    if (existItem) {
        return listItems.map((cartItem) => (cartItem.id === item.id ? { ...cartItem, quantity: ++cartItem.quantity } : cartItem))
    }
    return [...listItems, { ...item, quantity: 1 }]
}