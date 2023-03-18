import React from 'react'
import Link from 'next/link'
import './footerCss.css'

export default function Footer () {
  return (
    <div id='footer' className="flex fullW r pagePadding"> 
        <div className="flex hori fullH fullW r centerHori">
            <div id='pageWrapper' className="flex verti fullH r padtop30 padtom30 spaceBetweenH">
                <Link href="/" className='em1_5 r'>
                    PixelHive 
                </Link>
                
                Brought to you by Vinn
            </div>
        </div>
    </div>
  )
}
