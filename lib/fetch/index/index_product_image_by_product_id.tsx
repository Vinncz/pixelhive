import React from 'react'
import fetcher from '../fetcher';

export default async function index_product_image_by_product_id (product_id: string, jwt: any) {
    const scope = 'images/products/id/' + product_id

    return fetcher(scope, 'index_product_image_by_product_id', jwt)
}
