import getProductFromTag from '@/lib/getProductFromTag'
import Link from 'next/link'
import React from 'react'
import TruncateString from '../../../scripts/TruncateString';
import FormatCurrency from '../../../scripts/FormatCurrency';

var elementCount = 0;

export default async function ProductsSection (passedTag : TagData) {
    const returnedData: Promise<GroupData[]> = getProductFromTag(passedTag.tag_id.toString())
    const data = await returnedData
    const maxLen = 38
    console.log("\nbanyaknya produk didalem tag: " + data.length + '\n')
    
    if (data.length >= 1) {
        const returnPage = data.map(card => {
            return (
                <>
                    <Link className='popupEl r hideOverflow gap10 boxedEl1 borrad5 productCard fullW fullH' href={`../product/${card.product.map(id => {return id.product_id.toString()})}`}>
                        <div className="productCardImg r grid hideOverflow">
                            <img decoding='async' src="https://images.unsplash.com/photo-1551925608-7ae602b0def0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                        </div>
                        <div className="productCardDetails pad15 gap10 flex r verti">
                            <div className='productCardTitle em1_05 bottomVerti'>
                                {card.product.map(id => {return id.product_name})}
                            </div>
                            <div className='grid productCardPrice em1_15 martom5 b centerVerti'>
                                Rp.{card.product.map(id => {return FormatCurrency(id.product_price)})},-
                            </div>
                        </div>
                    </Link>
                </>
            )
        })
        
        return (
            <div className="fullW r autoGridH verti gap10 martom30">
                {returnPage}
            </div>
        )
    } else {
        return (
            <div className="fullW fullH centerHori centerVerti flex r boxedEl1 borrad5">
                Wah, produknya kosong nih!
                <br />
                Gimana kalo liat tag lain? Siapa tau jodoh..
            </div>
        )
    }
}

export function CardCount () {
    return elementCount;
}