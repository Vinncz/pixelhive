import React, { Suspense, use } from 'react'
import PageTitle from '../../components/PageTitle';
import Products from './components/ProductsSection';
import LoadingProductCards from '@/app/loaders/loading-product-cards';
import show_tag from '@/lib/fetch/show/show_tag';
import Cookies from "js-cookie";

type Params = {
    params: {
        tag_id: string
    }
}

export default async function page({params:{tag_id}}: Params) {
    const tag_data_call: Promise<Tag> = show_tag(tag_id, Cookies.get('jwt'))
    const tag_data = await tag_data_call



    const page = (
        <>
            <PageTitle title={tag_data.tag_name}  />

            <Suspense fallback={<LoadingProductCards/>}>
                { /* @ts-expect-error Server Component */ }
                <Products tag_id={tag_data.tag_id} />
            </Suspense>
        </>
    );

    const temp = (
        <>
            <PageTitle title={tag_data.tag_name}  />
            <LoadingProductCards/>
        </>
    )

    return page;
}
