
import { ReactComponent as Logo } from "../../assets/crown.svg"
import { auth } from "../../firebase/firebase.utils"
import { connect } from "react-redux"
import CartIcon from "../cart-icon/cart-icon"
import CartDropdown from "../cart-dropdown/cart-dropdown"
import { selectCartHidden, selectCurrentUser } from "../../redux/user/user.selectors"
import { createStructuredSelector } from "reselect"
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from "./header.style"

const Header = ({ currentUser, hidden }) =>
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
                    <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
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

export default connect(mapStateToProps)(Header)