import React from 'react'
import FormatCurrency from '../scripts/FormatCurrency'
import './css/productCard.css'
import { useRouter } from 'next/navigation';

type Param = {
    image_src?: string
    name?: string
    price?: number
    productGroup?: number
}

export default function ProductCard({image_src = "https://picsum.photos/200/200", name = "Product Name", price = 0.00, productGroup = 1}: Param) {
    const { push } = useRouter();
    const dsp_price = FormatCurrency(price)

    return (
        <>
            <div className="product_card boxedEl1 borrad5 popupEl" onClick={() => push('/product/edit/' + productGroup)}>
                <div className="image bortom1">
                    <img style={{aspectRatio: "1/1", width: "100%", objectFit: "cover"}} decoding='async' src={image_src} alt="product_image" />
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

