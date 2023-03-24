import React from 'react'

export default async function getSpecifiedTag (tag_id:string) {
    var data = null
    
    console.log("GETSPECIFIEDTAG: TAGID -> " + tag_id)
    console.log(`http://localhost:8000/api/tags/${tag_id}`)
    
    const res = await fetch (`http://localhost:8000/api/tags/${tag_id}`).then(response => response.json()).then(datas => {
        data = datas
        console.log("\nHasil yang diterima GetSpecifiedTag:\n" + JSON.stringify(datas))
    });
    
    if (!data) throw new Error('Failed to fetch tags.')
    return data
}