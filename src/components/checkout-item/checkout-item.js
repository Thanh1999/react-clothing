import { connect } from 'react-redux';
import { addItem, removeItem, subtracItem } from '../../redux/cart/cart.action';
import './checkout-item.scss';

const CheckoutItem = ({ cartItem, removeItem, addItem, subtractItem }) =>

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
        <div className='remove-button' onClick={() => removeItem(cartItem.id)}>&#10005;</div>
    </div>

const mapDispatchToProps = (dispatch) => (
    {
        removeItem: (id) => dispatch(removeItem(id)),
        addItem: (item) => dispatch(addItem(item)),
        subtractItem: (item) => dispatch(subtracItem(item)),

    }
)

export default connect(null, mapDispatchToProps)(CheckoutItem)