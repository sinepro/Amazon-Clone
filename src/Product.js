import "./Product.css"

import { type } from '@testing-library/user-event/dist/type';
import React from 'react';

import { useStateValue } from './StateProvider';

function Product({ id, title, price, image, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    //console.log("This is the basket >>> ", basket);

    const addToBasket = () => {
        // dispatch item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                price: price,
                image: image,
                rating: rating,
            }
        })
    }

    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p className='product__ratingStar'>&#x2605;</p>
                        ))
                    }
                    {Array(5- rating)
                        .fill()
                        .map((_, i) => (
                            <p className='product__ratingStar'>&#x2606;</p>
                        ))
                    }
                </div>
            </div>

            <img
                src={image}
                alt="Product picture"
            />

            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product

