type title = {
    title: string
}

import React from 'react'

export default function PageTitle ({ title }: title) {
    return (
        <div className='fullW flex r em2 martom30'> 
            {title}
        </div>
    )
}
