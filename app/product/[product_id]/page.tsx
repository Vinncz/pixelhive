'use client'
import React, { Suspense, useState, useEffect } from 'react'
import LoadingProduct from '@/app/loaders/loading-product'
import ProductPage from './components/ProductPage'
import show_product from '@/lib/fetch/show/show_product'
import show_merchant from '@/lib/fetch/show/show_merchant'
import Cookies from "js-cookie";

type Params = {
    params: {
        product_id: string
    }
}

export default function Page({ params: { product_id } }: Params) {
    const [productData, setProductData] = useState<Product | null>(null);
    const [merchantData, setMerchantData] = useState<Merchant | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const productPromise: Promise<Product> = show_product(product_id, Cookies.get('jwt'));
                const productData = await productPromise;
                setProductData(productData);

                const merchantPromise: Promise<Merchant> = show_merchant(productData.merchant_id.toString(), Cookies.get('jwt'));
                const merchantData = await merchantPromise;
                setMerchantData(merchantData);

                setLoading(false);
            } catch (error) {
                // Handle error
            }
        }

        fetchData();
    }, [product_id]);

    if (loading) {
        return <LoadingProduct />;
    }

    return (
        <>
            <Suspense fallback={<LoadingProduct />}>
                <ProductPage product_data={productData!} merchant_data={merchantData!} />
            </Suspense>
        </>
    );
}
