import './page.module.css'
import './about/page.css'
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

            <div id="heroBanner" className="r flex fullW borrad15 boxedEl1 pad30 martom30 hideOverflow centerHori centerVerti">
                <div id="heroBannerBg" className='abs'></div>

                <div className="flex verti fullW gap5 z2 padtop30 padtom30" style={{"justifyContent": "end", "height": "325px"}}>
                    <div className='em_75 b' style={{"color": "white", "opacity": "50%", "fontFamily": "Satoshi Italic"}}> #PixelHiveAlwaysAtHeart #PejuangOlshop </div>
                    <div className="em2 sb" style={{"color": "white", "letterSpacing": "-0.5px"}}> Daftar jadi mitra PixelHive™ sekarang! </div>
                    <a href="./merchant" className='padri30 padleft30 padtop10 padtom10 borradMAX marleft-5 martom15 martop10' style={{"width": "fit-content", "background": "#87336f", "color": "white"}}> Join now → </a>
                </div>
            </div>

            <span className="martom30"></span>
            <PageTitle title='All Categories' />

            <Suspense fallback={<LoadingTemplate msg='Fetching data..'/>}>
                <div className="fullH fullW r gridH2 verti gap25 martom30">
                    <Tags/>
                </div>
            </Suspense>
        </>
    )

    return Home
}
