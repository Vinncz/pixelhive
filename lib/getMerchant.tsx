import React from 'react'

export default async function getMerchant(merchant_id : number) {
    const res = await fetch (`http://localhost:8000/api/merchant/id/${merchant_id.toString()}`)
    const array = await res.json()
    
    const data = array.data
    
    console.log("\nHasil yang diterima getSpecifiedProduct:\n" + JSON.stringify(array))
    
    if (!data) throw new Error('Failed to fetch product.')
    return data
}
