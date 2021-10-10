import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeButton from '../../components/stripe-button/stripe-button';
import { SpinnerContainer, SpinnerOverlay } from '../../components/with-spiner/with-spiner.styles';
import { Item } from '../../model/Item';
import { User } from '../../model/User';
import { selectCartItems, selectCartTotal, selectFetching } from '../../redux/cart/cart.selectors';
import { RootState } from '../../redux/root-state';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import './CheckoutPage.scss';


const renderPayment = (cartTotal: number) => {

    return <div className='payment'>
        <div className='total'>
            <span>TOTAL: {cartTotal}</span>
        </div>
        <div>
            <div className='text-warning'>
                *Please use the following credit card for payments*
                <br />
                4242 4242 4242 4242 - EXP: 12/21 - CVC: 113
            </div>
            <StripeButton price={cartTotal} />
        </div>

    </div >
}

interface ICheckoutPage {
    cartItems: Array<Item>,
    cartTotal: number,
    currentUser: User,
    isFetching: boolean
}

const CheckoutPage: React.FC<ICheckoutPage> = ({ cartItems, cartTotal, currentUser, isFetching }) => {

    if (cartItems.length === 0 || !currentUser) {
        return <div className='checkout-page'>
            <div className='text-warning'>
                Your cart is empty
            </div>
        </div>
    }

    if (isFetching) {
        return <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    }


    return <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Total value</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map((item) => <CheckoutItem key={item.id} cartItem={item} />)
        }
        {renderPayment(cartTotal)}
    </div>
}

const mapStateToProps = createStructuredSelector<RootState,
    {
        cartItems: Array<Item>,
        cartTotal: number,
        currentUser: User,
        isFetching: boolean
    }>({
        cartItems: selectCartItems,
        cartTotal: selectCartTotal,
        currentUser: selectCurrentUser,
        isFetching: selectFetching
    })

export default connect(mapStateToProps)(CheckoutPage)