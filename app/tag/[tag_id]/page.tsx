import React, { Suspense, use } from 'react'
import PageTitle from '../../components/PageTitle';
import getSpecifiedTag from '@/lib/getSpecifiedTag'
import LoadingTemplate from '@/app/loaders/loading-template';
import Products from './components/ProductsSection';
import './page.module.css'

type Params = {
    params: {
        tag_id: string
    }
}

export default async function page({params:{tag_id}}: Params) {
    
    const returnedData: Promise<TagData[]> = getSpecifiedTag(tag_id)
    const datas = await returnedData
    
    const page = (
        <>
            <PageTitle title={datas.data.tag_name}  />
            
            <Suspense fallback={<LoadingTemplate msg='Fetching data..'/>}>
                <div className="fullH fullW r autoGrid verti gap25 martom30">
                    { /* @ts-expect-error Server Component */ }
                    <Products tag_id={datas.data.tag_id} />
                </div>
            </Suspense>
        </>
    );
    
    return page;
}