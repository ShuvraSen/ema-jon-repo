import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let totalPrice=0;
    
    let shipping=0
   
    for(const product of cart){
        totalPrice=totalPrice+product.price;
       
        shipping=shipping+product.shipping
       
    }
    let tax= (totalPrice*7/100)
    let grandTotal=totalPrice+tax+shipping

    // console.log(cart);
    return (
        <div className='cart'>
             <h1>order summary</h1>
             <p>Selected items: {cart.length}</p>
             <p>Total Price: ${totalPrice}</p>
             <p>Total-shipping:${shipping}</p>
             <p>Tax:${tax.toFixed(2)}</p>
             <h2>Grand Total:$ {grandTotal.toFixed(2)}</h2>
        </div>
    );
};

export default Cart;