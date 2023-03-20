import React from 'react'

export default async function getAllTags () {
    var data = null
    const res = await fetch ('http://localhost:8000/api/tags').then(response => response.json()).then(datas => {
        data = datas.data
    });
    
    if (!data) throw new Error('Failed to fetch tags.')
    return data
}