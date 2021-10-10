
import { ReactComponent as Logo } from "../../assets/crown.svg"
import { connect } from "react-redux"
import CartIcon from "../cart-icon/cart-icon"
import CartDropdown from "../cart-dropdown/cart-dropdown"
import { selectCartHidden, selectCurrentUser, selectUserLoading } from "../../redux/user/user.selectors"
import { createStructuredSelector } from "reselect"
import { HeaderContainer, LogoContainer, NameContainer, OptionLink, OptionsContainer, WelcomContainer } from "./header.style"
import { signOutStart } from "../../redux/user/user.action"
import { SpinnerContainer } from "../with-spiner/with-spiner.styles"
import { User } from "../../model/User"
import { Dispatch } from "redux"
import { MouseEventHandler } from "react"
import { RootState } from "../../redux/root-state"

interface IHeader {
    currentUser: User,
    hidden: boolean,
    signOutStart: MouseEventHandler<HTMLDivElement>,
    isLoading: boolean
}

const Header: React.FC<IHeader> = ({ currentUser, hidden, signOutStart, isLoading }) =>
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
                isLoading ? <SpinnerContainer isSmall={true} /> :

                    currentUser ?
                        <WelcomContainer>
                            <NameContainer>
                                Welcome, {currentUser.displayName + " "}
                            </NameContainer>
                            <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
                        </WelcomContainer>
                        : <OptionLink to='/sign'>SIGN IN</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null :
                <CartDropdown />}
    </HeaderContainer>

const mapStateToProps = createStructuredSelector<RootState, {
    currentUser: User,
    isLoading: boolean,
    hidden: boolean
}>({
    currentUser: selectCurrentUser,
    isLoading: selectUserLoading,
    hidden: selectCartHidden

})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    signOutStart: () => dispatch(signOutStart())
});


export default connect(mapStateToProps, mapDispatchToProps)(Header)