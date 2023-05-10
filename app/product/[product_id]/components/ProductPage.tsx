import LoadingTemplate from '@/app/loaders/loading-template'
import React, { Suspense } from 'react'
import ProductVariantItem from './ProductVariantItem'
import ProductImageSwiper from './ProductImageSwiper'

type Param = {
    product_data:any,
    merchant_data:any,
}

export default function ProductPage({product_data, merchant_data}:Param) {
    return (
        <div id="productPage" className="borrad5 fullW fullH">

            <Suspense fallback={<LoadingTemplate msg='Fetching data..'/>}>
                <ProductImageSwiper product_id={product_data.product_id}/>
            </Suspense>

            <div id="productBody" className='bortop1 fullH'>
                <div id="productContent">
                    <div className='bortom1 em1_5 pad15 padleft25' id="productName">
                        {product_data.product_name}
                    </div>
                    <div className='bortom1 pad15 padleft25 flex centerVerti gap15' id="merchant">
                        <img className='boxedEl1 borradMAX' style={{maxWidth: 35 + 'px', maxHeight: 35 + 'px', aspectRatio: 1 / 1}} src={merchant_data.merchant_image} alt="" />
                        {merchant_data.merchant_name}
                    </div>
                    <div className='pad15 padleft25 flex fullH' id="productDescription">
                        {product_data.product_desc}
                    </div>
                </div>

                <div id="productActions" className='borleft1 pad25 gap10'>
                    <button id="checkoutButton" className='ptr greenButton pad15 borrad5'> Checkout </button>
                    <div id="productVariantSelector" className='borrad5 flex centerHori hideOverflow'>
                        <Suspense fallback={<LoadingTemplate msg='Fetching data..'/>}>
                            { /* @ts-expect-error Server Component */ }
                            <ProductVariantItem current_product_id={product_data.product_id} group_id={product_data.group_id} />
                        </Suspense>
                    </div>
                </div>
            </div>

        </div>
    )
}
