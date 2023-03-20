import React from 'react'

export default async function getSpecifiedTag (tag_id: number) {
    const res = await fetch (`http://localhost:8000/api/category/${tag_id}`);
    if (!res.ok) throw new Error('Failed to fetch products!')
    
    return res.json()
}
