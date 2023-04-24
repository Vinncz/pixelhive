import React from 'react'
import fetcher from '../fetcher';

export default async function index_tags () {
    const scope = 'tags'

    return fetcher(scope, 'index_tags')
}
