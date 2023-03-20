import React from 'react'
import Link from 'next/link'
import './footerCss.css'

export default function Footer () {
  return (
    <div id='footer' className="flex fullW r pagePadding"> 
        <div className="flex hori fullH fullW r centerHori">
            <div id='pageWrapper' className="flex verti fullH r padtop30 padtom30 spaceBetweenH">
                <Link href="/" className='r verti'>
                    <span className='em1_5 r b'> PixelHive™ </span>
                    <span className='em_75 r'> The Marketplace for Digital Products </span>
                </Link>
                
                <span className='em_75 r'> Brought to you by Vinn </span>
            </div>
        </div>
    </div>
  )
}
