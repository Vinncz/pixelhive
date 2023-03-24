import React from 'react'
import type { Metadata } from 'next'
import getAllUsers from '@/lib/getAllUsers'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Users'
}

export default async function page() {
    const userData: Promise<User[]> = getAllUsers()
    const users = await userData
    
    const content = (
        <>
            <div className='fullW flex em2 martom30'>
                All Users • Development Area
            </div>
            
            <div className='fullH fullW grid2 verti martom30'>
                {users.map(user => {
                    return (
                        <Link href={`/users/${user.id}`}>
                            <div className='popupEl pad30 boxedEl1 borrad5' key={user.id}>
                                {user.name} 
                            </div>
                        </Link>
                    )
                })}
            </div>
        </>
    )
    
    return content;
}