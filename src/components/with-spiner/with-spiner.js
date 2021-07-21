import { SpinnerContainer, SpinnerOverlay } from "./with-spiner.styles"

const WithSpiner = (WrapedComponent) => ({ isLoading, ...otherProps }) => {
    return isLoading ? <SpinnerOverlay>
        <SpinnerContainer />
    </SpinnerOverlay>
        : <WrapedComponent {...otherProps} />
}

export default WithSpiner