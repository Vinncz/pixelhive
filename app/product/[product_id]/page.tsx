
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

    const PROMISE_product_data: Promise<Product> = show_product(product_id)
    const OBJECT_product_data = await PROMISE_product_data

    const PROMISE_merchant_data: Promise<Merchant> = show_merchant(OBJECT_product_data.merchant_id.toString());
    const OBJECT_merchant_data = await PROMISE_merchant_data

    const page = (
        <>
            <Suspense fallback={<LoadingProduct/>}>
                <ProductPage product_data={OBJECT_product_data} merchant_data={OBJECT_merchant_data} />
            </Suspense>
        </>
    )

    return page
}
