import React from 'react'

export default async function getSpecifiedProduct (product_id: string) {
    
    console.log(`\nURI yang dituju: http://localhost:8000/api/products/id/${product_id}`)
    const res = await fetch (`http://localhost:8000/api/products/id/${product_id}`)
    const array = await res.json()
    
    const data = array.data
    
    console.log("\nHasil yang diterima getSpecifiedProduct:\n" + JSON.stringify(array))
    
    if (!data) throw new Error('Failed to fetch product.')
    return data
}