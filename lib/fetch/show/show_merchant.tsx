import React from 'react'
import fetcher from '../fetcher';

export default async function show_merchant(merchant_id: string, jwt: any) {
    const scope = 'merchants/id/' + merchant_id

    return fetcher(scope, 'show_merchant', jwt)
}
