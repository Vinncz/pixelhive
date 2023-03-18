import React from 'react'

export default async function getAllCategory () {
    const res = await fetch ('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) throw new Error('Failed to fetch data!')
    
    return res.json()
}