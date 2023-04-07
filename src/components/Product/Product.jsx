import React from 'react';
import './Product.css'

const Product = ({product}) => {
    return (
        <div className='single-product'>
            <img src={product.img} alt="" />
            <div className='product-info'>
            <h6 className='product-name'>{product.name}</h6>
            <p>Price: ${product.price}</p>
            <p>Manufacturer: {product.seller}</p>
            <p>Rating: {product.ratings}</p>
            </div>
            <button className='btn-addToCart'>Add to cart</button>
        </div>
    );
};

export default Product;