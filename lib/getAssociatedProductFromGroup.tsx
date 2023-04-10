import React from 'react'

export default async function getAssociatedProductFromGroup (group_id : number) {
    const res = await fetch (`http://localhost:8000/api/products/group/${group_id.toString()}`)
    console.log(`http://localhost:8000/api/products/group/${group_id.toString()}`)
    const array = await res.json()
    
    const data = array.dataToo
    
    console.log("\nHasil yang diterima getAssociatedProductFromGroup:\n" + JSON.stringify(array))
    
    if (!data) throw new Error('Failed to fetch product.')
    return data
}
