import React from 'react'
import fetcher from '../fetcher';

export default async function index_products_by_group(group_id: string, jwt: any) {
    const scope = 'products/group/' + group_id

    return fetcher(scope, 'index_products_by_group', jwt)
}
