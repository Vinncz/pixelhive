import './page.module.css'
import Tags from './tag/components/Tags'
import LoadingTemplate from './loaders/loading-template'
import PageTitle from './components/PageTitle'

import dns from 'node:dns';
import { Suspense } from 'react';

dns.setDefaultResultOrder('ipv4first');

export default async function Home () {    
    const Home = (
        <>
            <style dangerouslySetInnerHTML={{__html: `#navspanButton { display: none; }`,}}/>
            
            <PageTitle title='All Categories' />
            
            <Suspense fallback={<LoadingTemplate msg='Fetching data..'/>}>
                <div className="fullH fullW r grid2 verti gap25 martom30">
                    { /* @ts-expect-error Server Component */ }
                    <Tags/>
                </div>
            </Suspense>
        </>
    )
    
    return Home
}