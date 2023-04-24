import React from 'react'
import fetcher from '../fetcher';

export default async function index_product_groups_by_tags (tag_id: string) {
    const scope = 'products/tag/' + tag_id

    return fetcher(scope, 'index_product_groups_by_tags')
}
