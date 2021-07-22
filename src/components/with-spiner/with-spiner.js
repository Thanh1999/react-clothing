import { SpinnerContainer, SpinnerOverlay } from "./with-spiner.styles"

const WithSpiner = (WrapedComponent) => ({ isLoading, ...otherProps }) => {
    console.log(`Olala: ${isLoading}`);
    return isLoading ? <SpinnerOverlay>
        <SpinnerContainer />
    </SpinnerOverlay>
        : <WrapedComponent {...otherProps} />
}

export default WithSpiner