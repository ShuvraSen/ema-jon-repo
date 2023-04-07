import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([])

    const handlerAddToCart=(product)=>{
        // console.log(product);
        const newCart=[...cart,product]
        setCart(newCart)
    }

    console.log(products)
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div className='shop-container'>

            <div className='products-container'>
                {/* <h2>products length:{products.length}</h2> */}
                    {
                        products.map(product=> <Product
                        key={product.id}
                        product={product}
                        handlerAddToCart={handlerAddToCart}

                        
                        ></Product>)
                    }
                
                {/* <Product></Product> */}
            </div>
            <div className='cart-container'>
                    {/* <h4>order summery</h4>
                    <p>Selected items: {cart.length}</p> */}
                    <Cart cart={cart}></Cart>


            </div>
        </div>
    );
};

export default Shop;