import React, { Suspense } from 'react'
import ProductContent from './ProductContent'
import LoadingTemplate from '@/app/loaders/loading-template'
import ProductVariantItem from './ProductVariantItem'

type Param = {
    data: ProductData
}

export default async function ProductBody ({data} : Param) {
    return (
        <div id="productBody" className='bortop1'>
            <div id="productContent">
                <Suspense fallback={<LoadingTemplate msg='Fetching data..'/>}>
                    { /* @ts-expect-error Server Component */ }
                    <ProductContent product_name={data.product_name} 
                    merchant_id={data.merchant_id} product_desc={data.product_desc} />
                </Suspense>
            </div>
            
            <div id="productActions" className='borleft1 pad25 gap10'>
                <button id="checkoutButton" className='ptr greenButton pad15 borrad5'> Checkout </button>
                <div id="productVariantSelector" className='borrad5 flex centerHori hideOverflow'>
                    <Suspense fallback={<LoadingTemplate msg='Fetching data..'/>}>
                        { /* @ts-expect-error Server Component */ }
                        <ProductVariantItem />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}
