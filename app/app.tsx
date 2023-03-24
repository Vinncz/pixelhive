import React from 'react'

export default async function anj (msg:string) {
    const res = await fetch(`http://localhost:8000/api/tags/18`);
    const data = await res.json()
    const fff = data.data.product_tags_mappings

    return JSON.stringify(data)
}


