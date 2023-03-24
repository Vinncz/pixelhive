import React from 'react'
import './loaderCss.css'

type Args = {
    msg: string
}

export default function LoadingTemplate (data:Args) {
    return (
        <div id='loader' className='hideOverflow softBg fullH fullW r verti flex boxedEl1 borrad5 centerHori centerVerti'>
            <div id="loading-bar" className='abs fullH fullW'></div>
            <div id="message" className='z1 em1'> {data.msg} </div>
        </div>
    )
}