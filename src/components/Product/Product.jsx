import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const Product = ({product,handlerAddToCart}) => {

    return (
        <div className='single-product'>
            <img src={product.img} alt="" />
            <div className='product-info'>
            <h6 className='product-name'>{product.name}</h6>
            <p>Pricee: ${product.price}</p>
            <p>Manufacturer: {product.seller}</p>
            <p>Rating: {product.ratings}</p>
            </div>
            <button onClick={()=>handlerAddToCart(product)} className='btn-addToCart'>Add to cart 
            <FontAwesomeIcon icon={faCoffee} />
            </button>
        </div>
    );
};

export default Product;