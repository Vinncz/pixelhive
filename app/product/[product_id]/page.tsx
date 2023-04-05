import getSpecifiedProduct from '@/lib/getSpecifiedProduct'
import ProductImage from './components/ProductImage'
import ProductBody from './components/ProductBody'
import React, { Suspense } from 'react'
import LoadingTemplate from '@/app/loaders/loading-template'

type Params = {
    params: {
        product_id: string
    }
}

export default async function page ({params:{product_id}}: Params) {
    
    const returnedData: Promise<ProductData> = getSpecifiedProduct(product_id)
    const data = await returnedData
    
    const page = (
        <>
            <div id="productPage" className="borrad5 fullW fullH">
                
                <Suspense fallback={<LoadingTemplate msg='Fetching data..'/>}>
                    { /* @ts-expect-error Server Component */ }
                    <ProductImage imgname={data.product_image} />
                </Suspense>
                
                <Suspense fallback={<LoadingTemplate msg='Fetching data..'/>}>
                    { /* @ts-expect-error Server Component */ }
                    <ProductBody data={data}/>
                </Suspense>
            </div>
        </>
    )
    
    return page
}
