import basket from "../assets/icons/shopping-cart-solid.svg"



export const Checkout = ({ database }) => {
    const checkoutFilter = database.filter((item) => {
        if(item.bought === true) {
            return item
        }
    })

    return (
        <div className="checkout">
            <img src={basket} alt="" />
            <span className="counter">{checkoutFilter.length}</span>
        </div>
    )
}