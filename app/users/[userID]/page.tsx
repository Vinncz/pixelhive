import React, { use } from 'react'
import getUser from '@/lib/getUser'
import getUserPosts from '@/lib/getUserPosts'
import { Suspense } from 'react'
import UserPosts from './components/UserPosts' // <- yang tidak pakai {} di import adalah komponen HTML atau method
import type { Metadata } from 'next'

type Params = {
    params: {
        userID: string
    }
}

export async function generateMetadata({params: {userID}}: Params): Promise<Metadata> {
    const userData: Promise<User> = getUser(userID)
    const user: User = await userData
    
    return {
        title: user.name,
        description: `This is the page of ${user.name}`
    }
}

export default async function userPage({params: {userID}}: Params) {
    const userData: Promise<User> = getUser(userID)
    const userPostsData: Promise<Post[]> = getUserPosts(userID)
    
    const user = await userData
    
    return (
        <>
            <div className='em2 martom30'> {user.name} </div>
            
            <Suspense fallback={ <h2> Loading.. </h2> }>
                <div className='borrad5 grid2 gap25 verti'>
                    { /* @ts-expect-error Server Component */ }
                    <UserPosts promise={userPostsData} />
                </div>
            </Suspense>
        </>
    )
}
