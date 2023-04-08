import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([])
    //console.log(products)
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    // cart useState er jonno
    useEffect(()=>{
        const savedCart=getShoppingCart()
        console.log(savedCart,'hhhj');
    },[])


    const handlerAddToCart=(product)=>{
        // console.log(product);
        const newCart=[...cart,product]
        setCart(newCart)
        addToDb(product.id)
        //just product dile local storage e [object object dekhabe]
        // addtodb fuction e id parameter diye ase. tai product.id dite hobe
    }

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