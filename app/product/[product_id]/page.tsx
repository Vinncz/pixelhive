import getSpecifiedProduct from '@/lib/getSpecifiedProduct'
import React, { Suspense } from 'react'
import LoadingProduct from '@/app/loaders/loading-product'
import getMerchant from '@/lib/getMerchant'
import ProductPage from './components/ProductPage'

type Params = {
    params: {
        product_id: string
    }
}

export default async function page ({params:{product_id}}: Params) {
    
    const returnedData: Promise<ProductData> = getSpecifiedProduct(product_id)
    const data = await returnedData
    
    // const productImages: Promise<ProductImage[]> = getProductImages(product_id)
    // const images = await productImages
    const images = "placeholder.png"
    
    const merchant: Promise<Merchant> = getMerchant(data.merchant_id);
    const associated_merchant = await merchant
    
    const page = (
        <>
            <Suspense fallback={<LoadingProduct/>}>
                <ProductPage data={data} associated_merchant={associated_merchant} images={images} />
            </Suspense>
        </>
    )
    
    return page
}
