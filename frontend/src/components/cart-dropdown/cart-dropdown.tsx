import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Dispatch } from "redux";
import { createStructuredSelector } from "reselect";
import { Item } from "../../model/Item";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItems, selectFetching } from "../../redux/cart/cart.selectors";
import { RootState } from "../../redux/root-state";
import CustomButton from "../button/button";
import CartItem from "../cart-item/cart-item";
import { SpinnerContainer } from "../with-spiner/with-spiner.styles";
import './cart-dropdown.scss'

interface ICartDropDown extends RouteComponentProps {
    isFetching: boolean,
    dispatch: Dispatch,
    cartItems: Array<Item>

}


const CartDropdown: React.FC<ICartDropDown> = ({ cartItems, history, dispatch, isFetching }) => {

    if (isFetching) {
        return <div className="cart-dropdown">
            <SpinnerContainer />
        </div>
    }

    return <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                    cartItems.map((item) => <CartItem key={item.id} item={item} />)
                    : <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT</CustomButton>
    </div >
}

const mapStateToProps = createStructuredSelector<RootState, {
    cartItems: Array<Item>,
    isFetching: boolean
}>({
    cartItems: selectCartItems,
    isFetching: selectFetching
})

export default withRouter(connect(mapStateToProps)(CartDropdown))