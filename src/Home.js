import "./Home.css"

import React from 'react'

import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img
                    className='home__image'
                    src='https://m.media-amazon.com/images/I/51bg7+jl1eL._SX1500_.jpg'
                    alt='background' />

                <div className='home__row'>
                    <Product
                        id={12321341}
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback"
                        price={11.96}
                        image="https://mrtns.eu/tovar/_l/203/l203091.jpg?v=01"
                        rating={5}
                    />
                    <Product
                        id={49538094}
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K -beater, douh Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image="https://media.cnn.com/api/v1/images/stellar/prod/kitchen-aid-stand-mixer-df-lead-image-17.jpg?c=16x9&q=w_800,c_fill"
                    />
                </div>

                <div className='home__row'>
                    <Product
                        id={4903850}
                        title="Samsung LC49RG90' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3}
                        image="https://images.samsung.com/is/image/samsung/p6pim/cz/lc27rg50fqrxen/gallery/cz-c27rg5-377306-lc27rg50fqrxen-395406568?$650_519_PNG$"
                    />
                    <Product
                        id={23445930}
                        title="Amazon Echo (3rd Generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.wired.com/photos/5e20f2a09fdee10008c4ce6d/3:4/w_1350,h_1800,c_limit/Gear-Amazon-Echo-Studio-SOURCE-Amazon.jpg"
                    />
                    <Product
                        id={3254354345}
                        title="New Apple iPad Pro - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-13-select-wifi-spacegray-202210?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1664411207212"
                    />
                </div>

                <div className='home__row'>
                    <Product
                        id={908293223}
                        title="Samsing LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.0}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81rus0UFhsL._AC_SL1500_.jpg"
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
