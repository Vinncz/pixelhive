type Props = {
    promise: Promise<Post[]>
}

import React from 'react'

export default async function UserPosts ({promise} : Props) {
    const posts = await promise
    
    const content = posts.map(post => {
        return (
            <article  className='boxedEl1 pad25 borrad5 gap10 flex verti popupEl' key={post.id}>
                <h2> {post.title} </h2>
                <p> {post.body} </p>
            </article>
        )
    })
    
    return content
}
