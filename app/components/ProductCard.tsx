import React from 'react'
import FormatCurrency from '../scripts/FormatCurrency'
import './css/productCard.css'

type Param = {
    image_src?: string
    name?: string
    price?: number
}

export default function ProductCard({image_src = "https://picsum.photos/200/200", name = "Product Name", price = 0.00}: Param) {
    const dsp_price = FormatCurrency(price)

    return (
        <>
            <div className="product_card boxedEl1 borrad5 popupEl">
                <div className="image bortom1">
                    <img decoding='async' src={image_src} alt="product_image" />
                </div>
                <div className="details">
                    <div className="product_name">
                        {name}
                    </div>
                    <div className="product_price">
                        Rp.{dsp_price},-
                    </div>
                </div>
            </div>
        </>
    )
}

