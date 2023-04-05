import React from 'react'
import getMerchant from '@/lib/getMerchant'

type Param = {
    product_name: string,
    merchant_id: number,
    product_desc: string
}

export default async function ProductContent ({product_name, merchant_id, product_desc} : Param) {
    
    /* Ini nanti diupdate kalo udah kelar APInya. */
    const data: Promise<Merchant> = getMerchant(merchant_id);
    const merchantData = await data;
    
    return (
        <>
            <div className='bortom1 em1_5 pad15 padleft25' id="productName"> 
                {product_name} 
            </div>
            <div className='bortom1 pad15 padleft25 flex centerVerti gap15' id="merchant"> 
                <img className='boxedEl1 borradMAX' style={{maxWidth: 35 + 'px', maxHeight: 35 + 'px', aspectRatio: 1 / 1}} src="https://images.unsplash.com/photo-1551925608-7ae602b0def0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                {merchantData.merchant_name}
            </div>
            <div className='pad15 padleft25 flex fullH' id="productDescription"> 
                {product_desc} 
            </div>
        </>
    )
}
