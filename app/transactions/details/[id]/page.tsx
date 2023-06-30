'use client'
import PageTitle from '@/app/components/PageTitle'
import React, { useEffect, useState } from 'react'

export default function page({ params: { id } }: any) {
    const [product, setProduct] = useState<any>()
    useEffect(() => {
        const getDetailTransaction = async () => {
            const response = await fetch('http://localhost:8000/api/transaction/transaction-id/' + id, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                credentials: 'include'
            });
            let fetchData = await response.json();
            console.log(fetchData.data);
            setProduct(fetchData.data.product)
        }
        getDetailTransaction();
    }, [])

    return (
        <>
            <PageTitle title='Transaction Details' />
            {product ? (
                <a href={"http://localhost:8000/storage/" + product[0].product_location} target='_blank'>LINK HERE</a>
            ) : null}
        </>
    )
}
