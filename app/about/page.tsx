import React from 'react'
import './page.css'

export default function page() {
    return (
        <>
            <div id="heroBanner" className="r flex fullW borrad15 boxedEl1 pad30 martom30 hideOverflow centerHori centerVerti">
                <div id="heroBannerBg" className='abs'></div>

                <div className="flex verti fullW gap5 z2 padtop30" style={{"justifyContent": "end"}}>
                    <div className="em2 sb" style={{"color": "white"}}> PixelHive™ </div>
                    <div className='em1_15' style={{"color": "white"}}> The Go To Marketplace for Digital Products </div>
                    <a href="../" className='padri30 padleft30 padtop10 padtom10 borradMAX martop15 marleft-5' style={{"width": "fit-content", "background": "#87336f", "color": "white"}}> Take me → </a>
                </div>
            </div>

            <div className="flex spaceAroundH bortom1" style={{"height": "auto", "paddingBottom": "60px", "overflow": "auto"}}>
                <div className="flex verti fullH gap10 centerHori centerVerti pad30 borrad15" style={{"width" : "200px"}}>
                    <svg width="" height="" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="200" height="200" rx="48" fill="#FFC900"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M93.8198 63.1426C110.76 63.1426 124.497 76.8753 124.497 93.8193C124.497 110.763 110.76 124.496 93.8198 124.496C76.8758 124.496 63.1431 110.763 63.1431 93.8193C63.1431 76.8753 76.8758 63.1426 93.8198 63.1426Z" stroke="#4A3529" stroke-width="8.36111" stroke-linecap="round" stroke-linejoin="round" style={{"mixBlendMode":"hard-light"}}/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M128.303 123.247C131.095 123.247 133.357 125.513 133.357 128.301C133.357 131.096 131.095 133.359 128.303 133.359C125.512 133.359 123.246 131.096 123.246 128.301C123.246 125.513 125.512 123.247 128.303 123.247Z" stroke="#4A3529" stroke-width="5.375" stroke-linecap="round" stroke-linejoin="round" style={{"mixBlendMode":"hard-light"}}/>
                    </svg>
                    <div className='verti flex centerVerti em1_15 padtom10 b productCardTitle' style={{"width": "175px", "textAlign": "center", "color": "#c79d00"}}>
                        Find your desired product with us
                    </div>
                </div>
                <div className="flex verti fullH gap10 centerHori centerVerti pad30 borrad15" style={{"width" : "200px"}}>
                    <svg width="" height="" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="200" height="200" rx="56" fill="#2FFFB4"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M61.4585 100C61.4585 128.904 71.096 138.542 100 138.542C128.904 138.542 138.542 128.904 138.542 100C138.542 71.0959 128.904 61.4584 100 61.4584C71.096 61.4584 61.4585 71.0959 61.4585 100Z" stroke="#4A3529" stroke-width="7.74177" stroke-linecap="round" stroke-linejoin="round" style={{"mixBlendMode":"hard-light"}}/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M86.2402 113.759L92.7986 92.801L113.757 86.2427L107.199 107.197L86.2402 113.759Z" stroke="#4A3529" stroke-width="7.74177" stroke-linecap="round" stroke-linejoin="round" style={{"mixBlendMode":"hard-light"}}/>
                    </svg>
                    <div className='verti flex centerVerti em1_15 padtom10 b productCardTitle' style={{"width": "175px", "textAlign": "center", "color": "#1eac78"}}>
                        Explore products from various categories
                    </div>
                </div>
                <div className="flex verti fullH gap10 centerHori centerVerti pad30 borrad15" style={{"width" : "200px"}}>
                    <svg width="" height="" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="200" height="200" rx="56" fill="#7BA8FF"/>
                        <path d="M70.5474 76.375C88.541 70.5653 109.622 69.2327 119 69.4375C128.378 69.6423 132.335 72.9816 135.188 78.6875C139.813 87.9375 138.837 111.007 130.563 118.403C122.293 125.798 88.1519 126.501 76.7744 118.403C64.7541 109.842 71.0341 86.513 70.641 70.5614C70.8769 61.6351 61.1875 60.1875 61.1875 60.1875" stroke="#433833" stroke-width="6.9375" stroke-linecap="round" stroke-linejoin="round" style={{"mixBlendMode":"hard-light"}}/>
                        <path d="M105.125 92.5625H117.95" stroke="#433833" stroke-width="6.9375" stroke-linecap="round" stroke-linejoin="round" style={{"mixBlendMode":"hard-light"}}/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M78.5948 137.089C79.9823 137.089 81.1108 138.218 81.1108 139.605C81.1108 140.997 79.9823 142.126 78.5948 142.126C77.2027 142.126 76.0742 140.997 76.0742 139.605C76.0742 138.218 77.2027 137.089 78.5948 137.089Z" fill="#414A64"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M78.5948 137.089C79.9823 137.089 81.1108 138.218 81.1108 139.605C81.1108 140.997 79.9823 142.126 78.5948 142.126C77.2027 142.126 76.0742 140.997 76.0742 139.605C76.0742 138.218 77.2027 137.089 78.5948 137.089Z" stroke="#433833" stroke-width="6.9375" stroke-linecap="round" stroke-linejoin="round" style={{"mixBlendMode":"hard-light"}}/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M126.378 137.089C127.77 137.089 128.898 138.218 128.898 139.605C128.898 140.997 127.77 142.126 126.378 142.126C124.99 142.126 123.862 140.997 123.862 139.605C123.862 138.218 124.99 137.089 126.378 137.089Z" fill="#414A64"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M126.378 137.089C127.77 137.089 128.898 138.218 128.898 139.605C128.898 140.997 127.77 142.126 126.378 142.126C124.99 142.126 123.862 140.997 123.862 139.605C123.862 138.218 124.99 137.089 126.378 137.089Z" stroke="#433833" stroke-width="6.9375" stroke-linecap="round" stroke-linejoin="round" style={{"mixBlendMode":"hard-light"}}/>
                    </svg>
                    <div className='verti flex centerVerti em1_15 padtom10 b productCardTitle' style={{"width": "175px", "textAlign": "center", "color": "#5a81cc"}}>
                        Start selling with us with no hidden fees
                    </div>
                </div>
                <div className="flex verti fullH gap10 centerHori centerVerti pad30 borrad15" style={{"width" : "200px"}}>
                    <svg width="" height="" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="200" height="200" rx="56" fill="#FF2F86"/>
                        <path d="M100.316 118.266V105.893" stroke="#2A2A2A" stroke-width="7.0625" stroke-linecap="round" stroke-linejoin="round"style={{"mixBlendMode":"hard-light"}}/>
                        <path d="M143.296 94.54L143.159 94.6389C131.756 101.664 116.699 105.906 100.295 105.906C83.8909 105.906 68.8761 101.664 57.4772 94.6389L57.3359 94.54" stroke="#2A2A2A" stroke-width="7.0625" stroke-linecap="round" stroke-linejoin="round" style={{"mixBlendMode":"hard-light"}}/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M56.9478 103.359C56.9478 74.3937 67.791 64.7369 100.316 64.7369C132.846 64.7369 143.685 74.3937 143.685 103.359C143.685 132.325 132.846 141.982 100.316 141.982C67.791 141.982 56.9478 132.325 56.9478 103.359Z" stroke="#2A2A2A" stroke-width="7.0625" stroke-linecap="round" stroke-linejoin="round" style={{"mixBlendMode":"hard-light"}}/>
                        <path d="M115.679 65.7798V62.8135C115.679 56.8622 111.333 52.0361 105.98 52.0361H94.6562C89.3028 52.0361 84.957 56.8622 84.957 62.8135V65.7798" stroke="#2A2A2A" stroke-width="7.0625" stroke-linecap="round" stroke-linejoin="round" style={{"mixBlendMode":"hard-light"}}/>
                    </svg>
                    <div className='verti flex centerVerti em1_15 padtom10 b productCardTitle' style={{"width": "185px", "textAlign": "center", "color": "#c52b6b"}}>
                        Grow with us along with expanding user base
                    </div>
                </div>
            </div>

            <div className="r pad15 padtop30 gridH2 gap15 padtom30 bortom1 martom30" /* style={{"height": "200px"}} */>
                <div className="flex verti gap5 boxedEl1 pad30 borrad15 popupEl">
                    PixelHive has over
                    <span className='b em1_5'> 21 Distinct Product Categories </span>
                </div>
                <div className="flex verti gap5 boxedEl1 pad30 borrad15 popupEl">
                    With over
                    <span className='b em1_5'> 1.500 Active Users Daily </span>
                </div>
                <div className="flex verti gap5 boxedEl1 pad30 borrad15 popupEl">
                    PixelHive has sold over
                    <span className='b em1_5'> 12.000 Products Daily </span>
                </div>
                <div className="flex verti gap5 boxedEl1 pad30 borrad15 popupEl">
                    With over
                    <span className='b em1_5'> 500 Satisfied Customer </span>
                </div>
            </div>

            <div className="martop30 pad15 flex r martom30 verti gap25 centerVerti">
                <span className='b em1_5'> Start your carrer or find your journey with PixelHive™ today. </span>
                <a href="/" className='padri30 padleft30 padtop15 padtom15 borradMAX greenButton' style={{"width": "fit-content"}}> Take me → </a>
            </div>
        </>
    )
}
