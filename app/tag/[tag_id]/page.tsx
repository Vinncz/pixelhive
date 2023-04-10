import React, { Suspense, use } from 'react'
import PageTitle from '../../components/PageTitle';
import getSpecifiedTag from '@/lib/getSpecifiedTag'
import LoadingTemplate from '@/app/loaders/loading-template';
import Products from './components/ProductsSection';
import { CardCount } from './components/ProductsSection';
import './page.module.css'
import LoadingProductCards from '@/app/loaders/loading-product-cards';


type Params = {
    params: {
        tag_id: string
    }
}

export default async function page({params:{tag_id}}: Params) {
    
    const returnedData: Promise<TagData> = getSpecifiedTag(tag_id)
    const datas = await returnedData
    const cardCount = CardCount()
    console.log("card count: " + cardCount)
    
    const page = (
        <>
            <PageTitle title={datas.tag_name}  />
            
            <Suspense fallback={<LoadingProductCards/>}>
                { /* @ts-expect-error Server Component */ }
                <Products tag_id={datas.tag_id} />
            </Suspense>
        </>
    );
    
    const temp = (
        <>
            <PageTitle title={datas.tag_name}  />
            
            <LoadingProductCards/>
        </>
    )
    
    return page;
}