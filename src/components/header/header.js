
import { ReactComponent as Logo } from "../../assets/crown.svg"
import { connect } from "react-redux"
import CartIcon from "../cart-icon/cart-icon"
import CartDropdown from "../cart-dropdown/cart-dropdown"
import { selectCartHidden, selectCurrentUser } from "../../redux/user/user.selectors"
import { createStructuredSelector } from "reselect"
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from "./header.style"
import { signOut } from "../../redux/user/user.action"

const Header = ({ currentUser, hidden, signOutStart }) =>
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">
                SHOP
            </OptionLink>
            <OptionLink to="/shop">
                CONTACT
            </OptionLink>
            {
                currentUser ?
                    <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
                    : <OptionLink to='/sign'>SIGN IN</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null :
                <CartDropdown />}
    </HeaderContainer>

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden

})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)