import React from 'react'

export default async function getProductFromTag (tag_id: string) {
    
    console.log(`\nURI yang dituju: http://localhost:8000/api/tags/${tag_id}`)
    const res = await fetch (`http://localhost:8000/api/tags/${tag_id}`)
    const array = await res.json()
    
    const data = array.dataToo
    
    console.log("\nHasil yang diterima getProductFromTag:\n" + JSON.stringify(array))
    
    if (!data) throw new Error('Failed to fetch tags.')
    return data
}