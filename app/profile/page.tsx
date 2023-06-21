"use client"
import React from 'react'
import './profile_page.css'
import PageTitle from '../components/PageTitle'

export default function page() {
    return (
        <>
            <PageTitle title='My Account' />

            <div className="flex verti gap30 martom30 padtom30">
                <span className='em1_5 bortom1 padtom15 martop15'> Customer Profile </span>

                <div className="flex fullW gap30 martop30">
                    <div className="borradMAX hideOverflow" style={{width: "fit-content", maxHeight: "125px"}}>
                        <img src="https://picsum.photos/600/300" className='fullH fullW' style={{objectFit: "cover", aspectRatio: "1/1"}} alt="" />
                    </div>
                    <div className="flex verti fullH centerHori gap5">
                        <span className="b em1_5"> My Username </span>
                        <span className="em1_15"> My Email Handle </span>
                    </div>
                </div>

                <div className="flex hori fullW gap30 martop30">
                    <div className="flex verti gap15 fullW fullH">
                        <span className="noSelect em1_15"> Username </span>
                        <input type="text" name='username' className='pad15 borrad5 nobor' />
                    </div>
                    <div className="flex verti gap15 fullW fullH">
                        <span className="noSelect em1_15"> Email </span>
                        <input type="email" name='email' className='pad15 borrad5 nobor' />
                    </div>
                </div>
                <div className="flex hori fullW gap30">
                    <div className="flex verti gap15 fullW fullH">
                        <span className="noSelect em1_15"> Password </span>
                        <input type="password" name='password' className='pad15 borrad5 nobor' />
                    </div>
                    <div className="flex verti gap15 fullW fullH">
                        <span className="noSelect em1_15"> Profile Picture </span>
                        <input type="file" name='customer_image' className='pad15 borrad5 nobor' style={{display: "none"}} />
                        <label htmlFor="customer_image" className='fullW fullH greenOutlineButton borrad5 flex centerHori centerVerti ptr b'> Select an image </label>
                    </div>
                </div>
            </div>

            <div className="flex verti gap30 martop30 martom30 padtom30 bortom1">
                <span className='em1_5 bortom1 padtom15 martop15'> Merchant Profile </span>

                <div className="flex fullW gap30 martop30">
                    <div className="borradMAX hideOverflow" style={{width: "fit-content", maxHeight: "125px"}}>
                        <img src="https://picsum.photos/200/300" className='fullH fullW' style={{objectFit: "cover", aspectRatio: "1/1"}} alt="" />
                    </div>
                    <div className="flex verti fullH centerHori gap5">
                        <span className="b em1_5"> My Shop Name </span>
                        <span className="em1_15"> My Email Handle </span>
                    </div>
                </div>

                <div className="flex hori fullW gap30">
                    <div className="flex verti gap15 fullW fullH">
                        <span className="noSelect em1_15"> Shop Name </span>
                        <input type="text" name='shop_name' className='pad15 borrad5 nobor' />
                    </div>
                    <div className="flex verti gap15 fullW fullH">
                        <span className="noSelect em1_15"> Shop Profile Picture </span>
                        <input type="file" name='shop_image' className='pad15 borrad5 nobor' style={{display: "none"}} />
                        <label htmlFor="shop_image" className='fullW fullH greenOutlineButton borrad5 flex centerHori centerVerti ptr b'> Select an image </label>
                    </div>
                </div>
            </div>


            <div className="flex verti r martop30 gap10">
                <span className='em1_5 b code noSelect'> Dangerous Zone </span>
                <span> Once taken, actions cannot be reverted. </span>

                <div className="flex hori gap30 martop15">
                    <button className='greenButton pad15 borrad5 ptr b fullW'> Submit </button>
                    <button className='redOutlineButton pad15 borrad5 ptr b fullW'> Cancel </button>
                </div>
            </div>

        </>
    )
}
