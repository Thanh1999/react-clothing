import './cart-icon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemsCount, selectFetching } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { SpinnerContainer } from '../with-spiner/with-spiner.styles';
import { Dispatch } from 'redux';
import { MouseEventHandler } from 'react';
import { RootState } from '../../redux/root-state';

interface ICartIcon {
    toggleCartHidden: MouseEventHandler<HTMLDivElement>,
    itemCount: number,
    isFetching: boolean
}

const CartIcon: React.FC<ICartIcon> = ({ toggleCartHidden, itemCount, isFetching }) => {

    if (isFetching) {
        return <SpinnerContainer isSmall />
    }

    return <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{
            itemCount
        }</span>
    </div>
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector<RootState,{
    itemCount: number,
    isFetching: boolean
}>({
    itemCount: selectCartItemsCount,
    isFetching: selectFetching
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)