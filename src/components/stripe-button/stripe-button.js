import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({price}) => {
    const stripePrice = price * 1000;

    const publishKey = 'pk_test_51JFE52BM7CG4Vu6ySXB7TZgXSFbBjNDw4tInBI076NqWGsBMKKtEOJqDoNcwuTWr6WmAC7NxkftbCKfJ6Bb6TZgq00uOiuPvwH'

    const onToken = token => {
        console.log(token)
        alert('Payment successful')
    }
    
    return (
        <StripeCheckout label='PAY NOW' name='CLOTHING Ltd'
        shippingAddress billingAddress
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmNFy8ddaH7FEr0p1WE5tLEhaGjaOGJ257cq64bd0s80dI4CxTnMD20KZ67dKhvpK56dc&usqp=CAU'
        description={`Your total is ${price}`}
        amount={stripePrice}
        panelLabel='PAY NOW'
        token={onToken}
        stripeKey={publishKey}
        />
    )

}

export default StripeButton