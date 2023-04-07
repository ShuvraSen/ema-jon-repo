import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products,setProducts]=useState([]);
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
                        
                        ></Product>)
                    }
                
                {/* <Product></Product> */}
            </div>
            <div className='cart-container'>
                    <h4>order summery</h4>
            </div>
        </div>
    );
};

export default Shop;