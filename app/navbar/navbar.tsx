import React from 'react';
import './navbarCss.css';
import Link from 'next/link';
import Head from 'next/head';

export default function NavBar () {
    return (
        <div id='navbar' className="flex fullW r pagePadding centerVerti spaceBetweenH padtop15 padtom15 marleft-5"> 
            <div className="flex r centerVerti gap15">
                <svg width="30" height="30" viewBox="0 0 40 40" className='marri15' fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_85_1600)">
                        <rect x="3" y="3" width="10" height="10" rx="2" className="textColored"/>
                        <rect x="15" y="3" width="10" height="10" rx="2" className="textColored"/>
                        <rect x="27" y="3" width="10" height="10" rx="2" className="textColored"/>
                    </g>
                    <g clip-path="url(#clip1_85_1600)">
                        <rect x="3" y="15" width="10" height="10" rx="2" className="textColored"/>
                        <rect x="15" y="15" width="10" height="10" rx="2" className="textColored"/>
                        <rect x="27" y="15" width="10" height="10" rx="2" className="textColored"/>
                    </g>
                    <g clip-path="url(#clip2_85_1600)">
                        <rect x="3" y="27" width="10" height="10" rx="2" className="textColored"/>
                        <rect x="15" y="27" width="10" height="10" rx="2" className="textColored"/>
                        <rect x="27" y="27" width="10" height="10" rx="2" className="textColored"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_85_1600">
                            <rect width="34" height="10" fill="white" transform="translate(3 3)"/>
                        </clipPath>
                        <clipPath id="clip1_85_1600">
                            <rect width="34" height="10" fill="white" transform="translate(3 15)"/>
                        </clipPath>
                        <clipPath id="clip2_85_1600">
                            <rect width="34" height="10" fill="white" transform="translate(3 27)"/>
                        </clipPath>
                    </defs>
                </svg>
                <Link href='/' className='em1_5'>
                    PixelHive 
                </Link>
            </div>
        </div>
    )
}