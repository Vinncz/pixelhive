import React from 'react'
import fetcher from '../fetcher';

export default async function show_product(product_id: string, jwt: any) {
    const scope = 'products/id/' + product_id

    return fetcher(scope, 'show_product', jwt)
}
