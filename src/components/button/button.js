import { CustomButtonContainer } from './button.styles'

const CustomButton = ({ children, ...otherProps }) =>
    <CustomButtonContainer {...otherProps}>
        {children}
    </CustomButtonContainer>

export default CustomButton