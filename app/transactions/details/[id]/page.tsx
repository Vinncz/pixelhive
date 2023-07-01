'use client'
import PageTitle from '@/app/components/PageTitle'
import React, { useEffect, useState } from 'react'

export default function page({ params: { id } }: any) {
    const [transaction, setTransaction] = useState<any>()
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
            setProduct(fetchData.data.product);
            setTransaction(fetchData.data);
            console.log(fetchData.data);
        }
        getDetailTransaction();
    }, [])

    return (
        <>
            <PageTitle title='Transaction Details' />
            {product ? (
                <>
                    <a href={"http://localhost:8000/storage/" + product[0].product_location} target='_blank'>LINK HERE</a>
                    <p>
                        transaction id: {transaction.transaction_id}
                    </p>
                    <p>
                        transaction at: {transaction.created_at}
                    </p>
                    <p>
                        transaction at: {transaction.created_at}
                    </p>
                    <p>
                        merchant: {transaction.merchant[0].merchant_name}
                    </p>
                </>
            ) : null}
        </>
    )
}
