import React from 'react'
import fetcher from '../fetcher';

export default async function index_tags(jwt: any) {
    const scope = 'tags'

    return fetcher(scope, 'index_tags', jwt)
}
