import React from 'react'

export default async function getAllTags () {
    var returnValue = null
    const res = await fetch ('http://localhost:8000/api/tags').then(response => response.json()).then(datas => {
        returnValue = datas.data
        console.log("\nHasil yang diterima sama getALL TAGS :\n" + JSON.stringify(datas))
    });
    
    if (!returnValue) throw new Error('Failed to fetch tags.')
    return returnValue
}