import React from 'react'
import fetcher from '../fetcher';

export default async function show_tag (tag_id: string) {
    const scope = 'tags/' + tag_id

    return fetcher(scope, 'show_tag')
}
