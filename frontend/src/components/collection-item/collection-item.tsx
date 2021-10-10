import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { Dispatch } from 'redux'
import { createStructuredSelector } from 'reselect'
import { Item } from '../../model/Item'
import { User } from '../../model/User'
import { addItem } from '../../redux/cart/cart.action'
import { RootState } from '../../redux/root-state'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import CustomButton from '../button/button'
import './collection-item.scss'

interface ICollectionItem extends RouteComponentProps {
    item: Item,
    addItem: Function,
    currentUser: User
}

const CollectionItem: React.FC<ICollectionItem> = ({ item, addItem, currentUser, history }) =>
    <div className='collection-item'>
        <div className='image' style={{
            backgroundImage: `url(${item.imageUrl})`
        }} />
        <div className='collection-footer'>
            <span className='name'>{item.name}</span>
            <span className='price'>{item.price}</span>
        </div>
        <CustomButton className='custom-button' inverted onClick={() => { currentUser ? addItem(item) : history.push("/sign") }} >ADD TO CART</CustomButton>
    </div>

const mapStateToProps = createStructuredSelector<RootState, {
    currentUser: User
}>({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addItem: (item: Item) => dispatch(addItem(item))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CollectionItem))