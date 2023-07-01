'use client'
import PageTitle from '@/app/components/PageTitle'
import React, { ReactElement, useEffect, useState } from 'react'

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

    const print_smt = (prop:any) : ReactElement => {
        console.log(prop)
        return <></>
    }

    return (
        <>
            <PageTitle title='Transaction Details' />
            {product ? product.map((p: any) => { return(
                <div className='flex verti gap30'>

                    <div className="flex gap30 hori">
                        <div className='borradMAX boxedEl1 hideOverflow' style={{width: "150px", height: "150px"}}>
                            <img className='fullW fullH' src={"http://localhost:8000/storage/" + p.image[0].image_location} alt="Product Image" style={{objectFit: "cover"}} />
                        </div>

                        <div className="flex centerHori verti">
                            <span className='b em1_5'> {p.product_name} </span>
                            {/* {print_smt(product)} */}
                            <span className=''> {transaction.merchant[0].merchant_name} </span>
                        </div>
                    </div>

                    <div className='flex verti gap15 martom30'>
                        <span className='b em1_5 bortom1 padtom5'>Details</span>
                        <div className="gridH2">
                            <span className="b"> Product name </span>
                            <span> {p.product_name} </span>
                        </div>
                        <div className="gridH2">
                            <span className="b"> Product owner </span>
                            <span> {transaction.merchant[0].merchant_name} </span>
                        </div>
                        <div className="gridH2">
                            <span className="b"> Bought at </span>
                            <span> {transaction.created_at} </span>
                        </div>
                        <div className="gridH2">
                            <span className="b"> Product price </span>
                            <span> Rp {p.product_price},- </span>
                        </div>
                    </div>

                    <div className='flex verti gap15 martom30 padtom30'>
                        <span className='b em1_5 bortom1 padtom5'>Description</span>
                        <p> {p.product_desc} </p>
                    </div>

                    <div className='flex verti gap15'>
                        <span className='b noSelect em1_15'> Access your product here: </span>
                        <a href={"http://localhost:8000/storage/" + p.product_location} className='greenButton pad15 padri30 padleft30 borrad5 flex centerHori b' target='_blank'>LINK HERE</a>
                    </div>
                </div>
            )

            }) : null}
        </>
    )
}
