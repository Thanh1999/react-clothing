import { CustomButtonContainer } from './button.styles'

interface ICustomButton{
    [otherProps: string]: any
}

const CustomButton: React.FC<ICustomButton> = ({ children, ...otherProps }) =>
    <CustomButtonContainer {...otherProps}>
        {children}
    </CustomButtonContainer>

export default CustomButton