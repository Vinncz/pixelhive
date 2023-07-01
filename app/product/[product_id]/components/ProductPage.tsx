'use client'
import LoadingTemplate from '@/app/loaders/loading-template'
import React, { Suspense, useEffect, useState } from 'react'
import ProductVariantItem from './ProductVariantItem'
import ProductImageSwiper from './ProductImageSwiper'

type Param = {
    product_data: any,
    merchant_data: any,
}

export default function ProductPage({ product_data, merchant_data }: Param) {
    const [bought, setBought] = useState(false);
    const [isOwner, setIsOwner] = useState(false);
    useEffect(() => {
        const alreadyBought = async () => {
            const response = await fetch('http://localhost:8000/api/transaction/bought', {
                method: 'POST',
                body: JSON.stringify({
                    'product_id': product_data.product_id
                }),
                credentials: 'include',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
            });
            let already = await response.json();
            setBought(already.data);
        }

        const owner = async () => {
            const response = await fetch('http://localhost:8000/api/transaction/valid-buyer', {
                method: 'POST',
                body: JSON.stringify({
                    'product_id': product_data.product_id,
                }),
                credentials: 'include',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
            });
            let m = await response.json();
            setIsOwner(m.data);
        }
        alreadyBought();
        owner();
    }, [])

    console.log("isOwner: ", isOwner)

    const handleCheckOut = async () => {
        if (bought == true) {

        }

        const response = await fetch('http://localhost:8000/api/transaction/buy', {
            method: 'POST',
            body: JSON.stringify({
                'product_id': product_data.product_id
            }),
            credentials: 'include',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
        });

        const data = await response.json();
        if (response.ok) {
            window.location.reload();
        }
        console.log(data);
    }
    return (
        <>

            {bought ? (
                <div className="fullW fullH" style={{position: "fixed", top: 0, left: 0, background: "rgba(0, 0, 0, 0.75)", zIndex: 4, color: "white"}}>
                    <div className='flex fullW fullH verti centerHori centerVerti'>
                        <span className='em1_5 b'> You have bought this item. </span>
                        <span className='em1_5 b'> You can access your product using <a style={{color: 'aqua', textDecoration: "underline"}} href={'http://localhost:8000/storage/' + product_data.product_location}> this link. </a> </span>
                        <br />
                        <br />
                        <a href='/' className='pad10 padleft15 padri15 greenButton borrad10 em1_15'> Go back! </a>
                    </div>
                </div>
            ) : (
                <></>
            )}

            <div id="productPage" className="borrad5 fullW fullH r">

                <Suspense fallback={<LoadingTemplate msg='Fetching data..' />}>
                    <ProductImageSwiper product_id={product_data.product_id} />
                </Suspense>

                <div id="productBody" className='bortop1 fullH'>
                    <div id="productContent">
                        <div className='bortom1 em1_5 pad15 padleft25' id="productName">
                            {product_data.product_name}
                        </div>
                        <div className='bortom1 pad15 padleft25 flex centerVerti gap15' id="merchant">
                            <img className='boxedEl1 borradMAX' style={{ maxWidth: 35 + 'px', maxHeight: 35 + 'px', aspectRatio: 1 / 1 }} src={'http://localhost:8000/storage/' + merchant_data.merchant_image ?? ''} alt="" />
                            {merchant_data.merchant_name}
                        </div>
                        <div className='pad15 padleft25 flex fullH' id="productDescription">
                            {product_data.product_desc}
                        </div>
                    </div>

                    <div id="productActions" className='borleft1 pad25 gap10'>
                        {!isOwner ? (
                            <button id="checkoutButton" className='ptr greenButton pad15 borrad5 noSelect' onClick={() => handleCheckOut()}> Checkout </button>
                        ) : (<div  className='ptr redButton pad15 borrad5 flex centerHori noSelect'>
                                <>This is your product.</>
                            </div>)}
                        <div id="productVariantSelector" className='borrad5 flex centerHori hideOverflow'>
                            <Suspense fallback={<LoadingTemplate msg='Fetching data..' />}>
                                <ProductVariantItem current_product_id={product_data.product_id} group_id={product_data.group_id} />
                            </Suspense>
                        </div>
                    </div>
                </div>

                </div>
        </>
    )
}
