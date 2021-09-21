import React from 'react';
import "../css/Product.css";
function Product() {
    return (
        <div classname="product">
            <div className="product_info">
                <p>the lean startup</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product_rating">
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                </div>
            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"></img>
            <button>Add To Basket</button>
        </div>
    )
}

export default Product
