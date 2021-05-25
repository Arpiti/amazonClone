import React from 'react';
import '../Product.css';
const Product = (props) => {
    const {title, rating, price, imgSrc} = props;
    let ratingStars= '';
    
    let ratingNo = parseInt(rating); 
    console.log('rating >', rating);
    if(Number.isInteger(ratingNo))
    {
        for (let i=1;i<=ratingNo;i++)
        ratingStars=ratingStars+'🌟';
    }
    console.log('ratingStars >', ratingStars);
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <div className="product__rating">
                    <p>{ratingStars}</p>
                </div>
                <div className="product__price">
                    <small>&#8377;</small>
                    <strong>{price}</strong>
                </div>
            </div>
            <img src={imgSrc} alt="product1 img" className="product__image" />
            <div>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product;