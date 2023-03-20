import Image from 'next/image'
import './page.module.css'
import Tags from './tag/components/Tags'
import Link from 'next/link'

import dns from 'node:dns';
import { Suspense } from 'react';
dns.setDefaultResultOrder('ipv4first');

export default async function Home () {    
    const Home = (
        <>
            <style dangerouslySetInnerHTML={{__html: `#navspanButton { display: none; }`,}}/>
            
            <div className='fullW flex em2 martom30'> 
                All Categories
            </div>

            <div className="fullH fullW grid2 verti gap25 martom30">
                <Suspense fallback={ <div className='fullH fullW r verti flex'> Fetching tags.. </div> }> { /* <-- will be replaced later */ }
                    { /* @ts-expect-error Server Component */ }
                    <Tags/>
                </Suspense>
            </div>
        </>
    )
    
    return Home
}