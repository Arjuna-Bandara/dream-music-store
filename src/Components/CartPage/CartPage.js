import React, { useContext, useState } from "react";
import NavHeader from "../NavHeader/NavHeader";
import { StoreContext } from "../../Context/StoreContext";

function CartPage() {
    const { cart, clearCart } = useContext(StoreContext);

    const [cartItems, setCartItems] = useState(cart);

    console.log(cart);
    return (
        <>
            <NavHeader />
            <div className="container">
                <h2>🛒 Cart </h2>

                {/* {cart.length} */}

                {/* {cart.map(item => {
                    <p>item.item_id : item.name</p>
                })} */}

    {cartItems.map(
        aa => <ol> {aa.item_id} : {aa.name} </ol> 
    )}
                

                <hr></hr>
                <button className="btn btn-success">Pay now</button>
                <button className="btn btn-danger" onClick={() => clearCart()}>Clear cart</button>
            </div>
        </>
    )
}

export default CartPage;