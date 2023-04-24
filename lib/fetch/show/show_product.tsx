import React from 'react'
import fetcher from '../fetcher';

export default async function show_product (product_id: string) {
    const scope = 'products/id/' + product_id

    return fetcher(scope, 'show_product')
}
