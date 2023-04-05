import React from 'react'

export default async function ProductVariantItem() {
    return (
        <>
            <div className="ptr productVariantItem pad15 centerHori selected">
                <span className='flex fullW spaceBetweenH em_6 opacity_5'>
                    <span> Variant </span>
                    <span> Excl. VAT 11% </span>
                </span>
                <span className='flex fullW spaceBetweenH gap25'>
                    <span> Basic Pack </span>
                    <span> Rp 299.999 </span>
                </span>
            </div>
            <div className="ptr productVariantItem pad15 centerHori">
                <span className='flex fullW spaceBetweenH em_6 opacity_5'>
                    <span> Variant </span>
                    <span> Excl. VAT 11% </span>
                </span>
                <span className='flex fullW spaceBetweenH'>
                    <span> Basic Pack </span>
                    <span> Rp 299.999 </span>
                </span>
            </div>
            <div className="ptr productVariantItem pad15 centerHori">
                <span className='flex fullW spaceBetweenH em_6 opacity_5'>
                    <span> Variant </span>
                    <span> Excl. VAT 11% </span>
                </span>
                <span className='flex fullW spaceBetweenH'>
                    <span> Basic Pack </span>
                    <span> Rp 299.999 </span>
                </span>
            </div>
        </>
    )
}
