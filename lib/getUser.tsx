import React from 'react'

export default async function getUser (userID: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
    if (!res.ok) throw new Error ('failed to fetch user!')
    
    return res.json()
}
