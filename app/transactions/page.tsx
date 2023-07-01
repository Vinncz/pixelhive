'use client'
import PageTitle from '@/app/components/PageTitle'
import React, { ReactElement, useEffect, useState } from 'react'

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

    const print_smt = (prop:any) : ReactElement => {
        console.log(prop)
        return <></>
    }

    return (
        <>
            <PageTitle title='Transaction List' />
            {transaction.length > 0 ? (
                transaction.map((transaction, index) =>
                    <a className="flex verti gap15 martom15 bortom1 padtom30" href={"transactions/details/" + transaction.transaction_id}>
                            <span className='em_75 b noSelect' style={{opacity: "0.5"}}> Transaction ID - {transaction.transaction_id} </span>
                            <span className='em_75 b noSelect' style={{opacity: "0.5"}}> Merchant - {transaction.merchant[0].merchant_name} </span>
                            <span className='em_75 b noSelect' style={{opacity: "0.5"}}> Done at - {transaction.created_at} </span>

                            <span className='em_75 b noSelect martop30' style={{opacity: "0.5"}}> Product bought: </span>
                            <div className='gridH2 gap15' style={{marginTop: "-5px"}}>
                                {transaction.product.map((t: Product) => {
                                    return (
                                    <div className="boxedEl1 pad15 borrad5 flex centerVerti gap15 popupEl">
                                        1x
                                        <div className='flex verti gap5'>
                                            <span className='sb'> {t.product_name}  </span>
                                            <span> Rp {t.product_price},- </span>
                                        </div>
                                        {print_smt(t)}
                                    </div>
                                )})}
                            </div>

                            <span className='greenButton b pad15 padri30 padleft 30 flex borrad5 ptr noSelect flex centerHori'> Show Details </span>
                    </a>
                )) : (
                    <div className='fullW fullH flex verti centerHori centerVerti boxedEl1 borrad5 b em1_15' style={{textAlign: "center"}}>
                        You haven't bought any product yet.
                        <br />
                        Buy something first, and come back here shall we?
                        <br />
                        <br />
                        <br />
                        <a href="/" className='pad15 padri30 padleft30 borrad5 greenButton'> Browse items </a>
                    </div>
                )}
        </>
    )
}
