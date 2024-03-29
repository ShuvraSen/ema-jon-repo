import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let totalPrice=0;
    
    let shipping=0
    let quantity=0;
   
    for(const product of cart){
        product.quantity=product.quantity || 1
        totalPrice=(totalPrice+product.price)*product.quantity;
       
        shipping=shipping+product.shipping
        quantity=quantity+product.quantity
       
    }
    let tax= (totalPrice*7/100)
    let grandTotal=totalPrice+tax+shipping

    console.log(cart);
    return (
        <div className='cart'>
             <h1>order summary</h1>
             <p>Selected items: {quantity}</p>
             <p>Total Price: ${totalPrice}</p>
             <p>Total-shipping:${shipping}</p>
             <p>Tax:${tax.toFixed(2)}</p>
             <h2>Grand Total:$ {grandTotal.toFixed(2)}</h2>
        </div>
    );
};

export default Cart;