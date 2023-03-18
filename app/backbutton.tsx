"use client"

import { useRouter } from 'next/navigation'
import React from 'react'
import Image from 'next/image';
import backButton from '../assets/back-button.svg';

export default function BackButton () {
    const router = useRouter();
    return (
        <button onClick={() => router.back()} id='navspanButton' className='visibleWhenHoveredTrigger'>
            <svg width="115" height="35" viewBox="0 0 195 35" fill="none" className='visibleWhenHoveredTrigger' xmlns="http://www.w3.org/2000/svg">
                <path d="M9.888 27.312L4.176 21.6H20.448V20.184H4.176L9.888 14.448L8.88 13.464L1.44 20.904L8.88 28.32L9.888 27.312Z" className='textColored'/>
                <path className='textColored visibleWhenHoveredAffectedComponent' d="M43.9443 12.4H49.2243V28H50.9523V12.4H56.2563V10.816H43.9443V12.4ZM59.8296 28.288C61.7976 28.288 63.3816 27.424 64.1016 25.96L64.3176 28H65.7096V20.488C65.7096 17.416 63.7416 16.072 61.0536 16.072C58.1976 16.072 56.2776 17.584 56.2776 19.936H57.7896C57.7896 18.376 58.9896 17.464 61.0056 17.464C62.7096 17.464 64.0776 18.184 64.0776 20.464V20.848L60.2376 21.16C57.5256 21.376 55.8936 22.72 55.8936 24.856C55.8936 26.896 57.3576 28.288 59.8296 28.288ZM60.2136 26.944C58.6296 26.944 57.5736 26.224 57.5736 24.808C57.5736 23.512 58.4616 22.552 60.6456 22.36L64.0776 22.096V22.72C64.0776 25.24 62.6616 26.944 60.2136 26.944ZM70.7607 28V24.52L73.0167 22.192L76.7127 28H78.6327L74.1447 21.016L78.6087 16.384H76.5207L70.7607 22.384V10.504H69.1047V28H70.7607ZM85.0844 28.288C87.8204 28.288 89.6204 26.968 90.2444 24.52H88.6604C88.2284 26.056 87.0044 26.872 85.1084 26.872C82.6124 26.872 81.1244 25.24 81.0044 22.408H90.2444V21.592C90.2444 18.304 88.1084 16.072 84.9644 16.072C81.6524 16.072 79.3964 18.568 79.3964 22.192C79.3964 25.84 81.6764 28.288 85.0844 28.288ZM84.9644 17.488C87.1484 17.488 88.5884 18.976 88.5884 21.208H81.0524C81.3404 18.928 82.7804 17.488 84.9644 17.488ZM101.204 28V20.8C101.204 19.024 102.38 17.584 104.324 17.584C106.076 17.584 107.204 18.736 107.204 20.704V28H108.836V20.824C108.836 19.024 109.988 17.56 111.932 17.56C113.708 17.56 114.812 18.736 114.812 20.728V28H116.42V20.392C116.42 17.704 114.764 16.072 112.244 16.072C110.372 16.072 108.956 17.032 108.428 18.544C107.876 17.032 106.508 16.072 104.684 16.072C103.052 16.072 101.756 16.816 101.18 18.04L100.988 16.384H99.5483V28H101.204ZM124.623 28.288C127.359 28.288 129.159 26.968 129.783 24.52H128.199C127.767 26.056 126.543 26.872 124.647 26.872C122.151 26.872 120.663 25.24 120.543 22.408H129.783V21.592C129.783 18.304 127.647 16.072 124.503 16.072C121.191 16.072 118.935 18.568 118.935 22.192C118.935 25.84 121.215 28.288 124.623 28.288ZM124.503 17.488C126.687 17.488 128.127 18.976 128.127 21.208H120.591C120.879 18.928 122.319 17.488 124.503 17.488ZM140.527 28L140.695 25.624C141.511 27.424 143.119 28.288 145.063 28.288C148.447 28.288 150.463 25.696 150.463 22.216C150.463 18.712 148.495 16.072 145.111 16.072C143.143 16.072 141.559 16.936 140.743 18.64V10.504H139.087V28H140.527ZM140.767 22.168C140.767 19.504 142.255 17.56 144.799 17.56C147.319 17.56 148.783 19.504 148.783 22.168C148.783 24.856 147.319 26.776 144.799 26.776C142.255 26.776 140.767 24.856 140.767 22.168ZM156.439 28.288C158.407 28.288 159.991 27.424 160.711 25.96L160.927 28H162.319V20.488C162.319 17.416 160.351 16.072 157.663 16.072C154.807 16.072 152.887 17.584 152.887 19.936H154.399C154.399 18.376 155.599 17.464 157.615 17.464C159.319 17.464 160.687 18.184 160.687 20.464V20.848L156.847 21.16C154.135 21.376 152.503 22.72 152.503 24.856C152.503 26.896 153.967 28.288 156.439 28.288ZM156.823 26.944C155.239 26.944 154.183 26.224 154.183 24.808C154.183 23.512 155.071 22.552 157.255 22.36L160.687 22.096V22.72C160.687 25.24 159.271 26.944 156.823 26.944ZM164.826 22.216C164.826 25.864 167.058 28.288 170.346 28.288C172.986 28.288 175.05 26.728 175.602 24.352H173.922C173.466 25.84 172.074 26.8 170.346 26.8C167.994 26.8 166.458 24.952 166.458 22.192C166.458 19.336 168.114 17.536 170.466 17.536C172.074 17.536 173.466 18.424 173.898 20.032H175.554C175.098 17.632 173.13 16.072 170.442 16.072C167.058 16.072 164.826 18.568 164.826 22.216ZM179.839 28V24.52L182.095 22.192L185.791 28H187.711L183.223 21.016L187.687 16.384H185.599L179.839 22.384V10.504H178.183V28H179.839ZM191.801 22.84C191.993 21.136 192.113 17.992 192.113 14.872V10.816H190.313V14.872C190.313 17.968 190.409 21.136 190.601 22.84H191.801ZM191.225 28.336C192.017 28.336 192.713 27.64 192.713 26.824C192.713 26.008 192.017 25.336 191.225 25.336C190.385 25.336 189.713 26.008 189.713 26.824C189.713 27.64 190.385 28.336 191.225 28.336Z"/>
                <path d="M43.6562 33.64H194.465V35.56H43.6562V33.64Z" className='textColored visibleWhenHovered'/>
            </svg>
        </button>
    )
}
