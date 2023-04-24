
import React, { Suspense } from 'react'
import LoadingProduct from '@/app/loaders/loading-product'
import ProductPage from './components/ProductPage'
import show_product from '@/lib/fetch/show/show_product'
import show_merchant from '@/lib/fetch/show/show_merchant'

type Params = {
    params: {
        product_id: string
    }
}

export default async function page ({params:{product_id}}: Params) {

    const product_data_call: Promise<ProductData> = show_product(product_id)
    const product_data = await product_data_call

    const merchant_data_call: Promise<Merchant> = show_merchant(product_data.merchant_id.toString());
    const merchant_data = await merchant_data_call

    const page = (
        <>
            <Suspense fallback={<LoadingProduct/>}>
                <ProductPage product_data={product_data} merchant_data={merchant_data} />
            </Suspense>
        </>
    )

    return page
}
