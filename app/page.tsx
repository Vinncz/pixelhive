import Image from 'next/image'
import './page.module.css'
import getAllCategory from '@/lib/getAllCategory'
import Link from 'next/link'

export default async function Home () {
    const userData: Promise<User[]> = getAllCategory()
    const users = await userData
    
    const Home = (
        <>
            <style dangerouslySetInnerHTML={{__html: `#navspanButton { display: none; }`,}}/>
            
            <div className='fullW flex em2 martom30'> 
                All Categories
            </div>

            <div className="fullH fullW flex verti gap25 martom30">
                {users.map(user => {
                    return (
                        <>
                            <Link key={user.id} href={`/users/${user.id}`}>
                                <div className='popupEl pad30 boxedEl1 borrad5'>
                                    {user.name} 
                                </div>
                            </Link>
                        </>
                    )
                })}
            </div>
        </>
    )
    
    return Home
}