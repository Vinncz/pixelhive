import React from 'react'

export default function LoadingProduct () {
    return (
        <div id="productPage" className="borrad5 fullW fullH hideOverflow">
                
                <div className='product-page-image loading-bar flex fullH fullW'></div>
                
                <div id="productBody" className='bortop1'>
                    <div id="productContent">
                        <div className='bortom1 em1_5 pad15 padleft25' id="productName"> 
                            <div className='medium-loader-container short borradMAX hideOverflow'>
                                <div className='loading-bar short'></div>
                            </div>
                        </div>
                        <div className='bortom1 pad15 padleft25 flex centerVerti gap15' id="merchant"> 
                            <div className='borradMAX hideOverflow boxedEl1'>
                                <div className='loading-bar short-round'></div>
                            </div>
                            <div className='short-loader-container short borradMAX hideOverflow'>
                                <div className='loading-bar short'></div>
                            </div>
                        </div>
                        <div className='pad15 padleft25 flex fullH hideOverflow gap10 verti' id="productDescription"> 
                            <div className='medium-loader-container hideOverflow'>
                                <div className='borradMAX hideOverflow tiny'><div className='loading-bar short'></div></div>
                            </div>
                            <div className='short-loader-container hideOverflow'>
                                <div className='borradMAX hideOverflow tiny'><div className='loading-bar short'></div></div>
                            </div>
                            <div className='tiny-loader-container hideOverflow'>
                                <div className='borradMAX hideOverflow tiny'><div className='loading-bar short'></div></div>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div id="productActions" className='borleft1 pad25 gap10'>
                        {/* <button id="checkoutButton" className='ptr greenButton pad15 borrad5'> Checkout </button> */}
                        <div className="pad15 borrad5 ptr boxedEl1 hideOverflow">
                            <div className='short-loader-container fullW hideOverflow'>
                                <div className='borradMAX hideOverflow fullW'><div className='loading-bar tiny'></div></div>
                            </div>
                        </div>
                        <div id="productVariantSelector" className='borrad5 flex centerHori hideOverflow'>
                            <span className='ptr productVariantItem pad15 flex centerHori'>
                                <div className='tiny-loader-container fullW hideOverflow'>
                                    <div className='borradMAX hideOverflow fullW'><div className='loading-bar tiny'></div></div>
                                </div>
                            </span>
                            <span className='ptr productVariantItem pad15 flex centerHori'>
                                <div className='tiny-loader-container fullW hideOverflow'>
                                    <div className='borradMAX hideOverflow fullW'><div className='loading-bar tiny'></div></div>
                                </div>
                            </span>
                            <span className='ptr productVariantItem pad15 flex centerHori'>
                                <div className='tiny-loader-container fullW hideOverflow'>
                                    <div className='borradMAX hideOverflow fullW'><div className='loading-bar tiny'></div></div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
    )
 }
 