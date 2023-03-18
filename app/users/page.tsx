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
        <section>
            <div className='em2'>
                Matching Products
            </div>
            <br />
            {users.map(user => {
                return (
                    <>
                        <p key={user.id}>
                            <Link href={`/users/${user.id}`}> {user.name} </Link>
                        </p>
                        <br />
                    </>
                )
            })}
        </section>
    )
    
    return content;
}