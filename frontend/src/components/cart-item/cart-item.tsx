import { Item } from '../../model/Item';
import './cart-item.scss';

interface ICartItem{
    item: Item
}

const CartItem: React.FC<ICartItem> = ({ item: { name, price, imageUrl, quantity } }) =>
    <div className='cart-item'>
        <img src={imageUrl} alt='item' />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x ${price}</span>
        </div>
    </div>

export default CartItem