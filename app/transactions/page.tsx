'use client'
import PageTitle from '@/app/components/PageTitle'
import React, { useEffect, useState } from 'react'

export default function page() {
    const [transaction, setTransaction] = useState<any[]>([])
    useEffect(() => {
        const getUserTransaction = async () => {
            const response = await fetch('http://localhost:8000/api/transaction/user', {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                credentials: 'include'
            });
            let fetchData = await response.json();
            setTransaction(fetchData.data);
            console.log(fetchData);
        }
        getUserTransaction();
    }, [])
    return (
        <>
            <PageTitle title='Transaction List' />
            {transaction.length > 0 ? (
                transaction.map(transaction =>
                    <a href={"transactions/details/" + transaction.transaction_id}>transaction {transaction.transaction_id}</a>
                )) : null}
        </>
    )
}
