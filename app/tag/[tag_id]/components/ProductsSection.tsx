import getProductFromTag from '@/lib/getProductFromTag'
import Link from 'next/link'
import React from 'react'

export default async function ProductsSection (passedTag : ProductTag) {
    const returnedData: Promise<GroupData[]> = getProductFromTag(passedTag.tag_id)
    const data = await returnedData
    console.log("\nbanyaknya produk didalem tag: " + data.length + '\n')
    
    const content = data.map(card => {
        return (
            <>
                <Link className='popupEl pad30 boxedEl1 borrad5' key={card.product.map(id => {return id.product_id})} href={`./product/${card.product.map(id => {return id.product_id})}`}>
                    <div>
                        {card.product.map(id => {return id.product_name})}
                    </div>
                </Link>
            </>
        )
    })
    
    return content
}