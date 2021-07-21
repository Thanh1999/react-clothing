import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.action'
import CustomButton from '../button/button'
import './collection-item.scss'

const CollectionItem = ({ item, addItem }) =>
    <div className='collection-item'>
        <div className='image' style={{
            backgroundImage: `url(${item.imageUrl})`
        }} />
        <div className='collection-footer'>
            <span className='name'>{item.name}</span>
            <span className='price'>{item.price}</span>
        </div>
        <CustomButton className='custom-button' inverted onClick={() => addItem(item)} >ADD TO CART</CustomButton>
    </div>

const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)