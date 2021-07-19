export const addItemToCart = (listItems, item) => {
    const existItem = listItems.find((cartItem) => cartItem.id === item.id)
    if (existItem) {
        return listItems.map((cartItem) => (cartItem.id === item.id ? { ...cartItem, quantity: ++cartItem.quantity } : cartItem))
    }
    return [...listItems, { ...item, quantity: 1 }]
}


export const subtractItemToCart = (listItems, item) => {
    const existItem = listItems.find((cartItem) => cartItem.id === item.id)
    if (existItem.quantity === 1) {
        return listItems.filter((cartItem) => (cartItem.id !== item.id))
    }
    return listItems.map((cartItem) => (cartItem.id === item.id ? { ...cartItem, quantity: --cartItem.quantity } : cartItem))
}