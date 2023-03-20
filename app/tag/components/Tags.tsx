import getAllTags from '@/lib/getAllTags'
import Link from 'next/link'
import React from 'react'

export default async function Tags () {
    const data: Promise<ProductTag[]> = getAllTags()
    const tags = await data
    
    const content = tags.map(tag => {
        return (
            <>
                <Link key={tag.tag_id} href={`/tag/${tag.tag_id}`}>
                    <div className='popupEl pad30 boxedEl1 borrad5'>
                        {tag.tag_name} 
                    </div>
                </Link>
            </>
        )
    })
    
    return content
}
