import getAssociatedProductFromGroup from '@/lib/getAssociatedProductFromGroup'
import FormatCurrency from '@/app/scripts/FormatCurrency'
import React from 'react'

type Param = {
    group_id: number,
    current_product_id: number
}

export default async function ProductVariantItem({group_id, current_product_id}: Param) {
    const data: Promise<ProductData[]> = await getAssociatedProductFromGroup(group_id)
    const associatedProduct = await data
    
    var classes = "ptr productVariantItem pad15 centerHori "
    
    const content = associatedProduct.map(item => {
        var thisclasses = classes
        if (item.product_id == current_product_id)
            thisclasses += "selected"
            
        return (
            <a href={'./' + item.product_id} className={thisclasses}>
                <span className='flex fullW spaceBetweenH em_6 opacity_5'>
                    <span> Variant </span>
                    <span> Excl. VAT 11% </span>
                </span>
                <span className='flex fullW spaceBetweenH gap25'>
                    <span> {item.product_name.substring(0, 15)} </span>
                    <span> {FormatCurrency(item.product_price)} </span>
                </span>
            </a>
        )
    })
    
    return content
}
