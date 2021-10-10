import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Item } from '../../model/Item';
import { addItem, removeItem, subtracItem } from '../../redux/cart/cart.action';
import './checkout-item.scss';

interface ICheckoutItem {
    cartItem: Item,
    removeItem: Function,
    addItem: Function,
    subtractItem: Function,
}

const CheckoutItem: React.FC<ICheckoutItem> = ({ cartItem, removeItem, addItem, subtractItem }) =>

    <div className='checkout-item'>
        <div className='image-container'>
            <img alt='item' src={cartItem.imageUrl} />
        </div>
        <span className='name'>{cartItem.name}</span>
        <span className='price'>{cartItem.price}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => subtractItem(cartItem)}>&#10094;</div>
            <div className='value'>{cartItem.quantity}</div>
            <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
        </span>
        <span className='price'>{cartItem.price * cartItem.quantity}</span>
        <div className='remove-button' onClick={() => removeItem(cartItem.id)}>&#10005;</div>
    </div>

const mapDispatchToProps = (dispatch: Dispatch) => (
    {
        removeItem: (id: number) => dispatch(removeItem(id)),
        addItem: (item: Item) => dispatch(addItem(item)),
        subtractItem: (item: Item) => dispatch(subtracItem(item)),

    }
)

export default connect(null, mapDispatchToProps)(CheckoutItem)