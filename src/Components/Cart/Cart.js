import './Cart.css';
import React from 'react';

const Cart = (props) => {
    const {cart} = props;

    /* const total = cart.reduce((previous, product) => previous + product.price, 0) */
    
    let totalQuantity = 0;
    let total = 0;
    for(const product of cart){
        if(!product.quantity){
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;

    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Itmes Ordered: {totalQuantity}</h5>
            <p>Total: {total.toFixed(2)}</p>
            <p>Shipping: {shipping.toFixed(2)}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <hr />
            <h4 className="grand-total">GrandTotal: {grandTotal.toFixed(2)}</h4>
            {props.children}
        </div>
    );
};

export default Cart;