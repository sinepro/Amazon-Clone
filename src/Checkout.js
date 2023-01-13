import "./Checkout.css"

import React, { forwardRef } from 'react';
import FlipMove from 'react-flip-move';

import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal.js"


// Has to be wrapped in DOM object which has ref
const FunctionalComponent = forwardRef((props, ref) => (
    <div ref={ref}>
        <CheckoutProduct
            id={props.id}
            title={props.title}
            image={props.image}
            price={props.price}
            rating={props.rating}
        />
    </div>
));

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className='checkout__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Shopping_Feb22/1500x250PCbanneFeb22.jpg" alt="Ad" />
                <div>
                    <h3 className='checkout__greetings'>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                </div>

                {<FlipMove>
                    {basket.map(item => (
                        <FunctionalComponent
                            key={item}
                            {...item}
                        />
                    ))}
                </FlipMove>}

            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
