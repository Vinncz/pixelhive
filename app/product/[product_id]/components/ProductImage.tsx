import React from 'react'

type Param = {
    imgname: string
}

export default async function ProductImage ({imgname} : Param) {
    return (
        <div id="productImage">
            <img src={imgname} alt="product image" />
        </div>
    )
}
