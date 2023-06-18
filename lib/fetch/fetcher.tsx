import React from 'react'
import default_address from './default_address'
import { cookies } from 'next/headers'

/**
 * @param scope is used to specify which endpoint should the fetcher go to.
 * No prior '/' required.
 * Example: `'products/id/1'`, `'tags/'`, `'tags/1'`
 *
 * */

export default async function fetcher(scope: string, function_caller_name: string, jwt: any) {
    const address = default_address()
    try {
        console.log(`\n${function_caller_name} called [${address + scope}] and recieved the following:`)
        return await fetch (address + scope, {
            credentials: 'include',
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${jwt}`
            },
        }).then(response => response.json()).then(datas => {
            console.log(JSON.stringify(datas) + '\n')
            return datas.data
        })

    } catch ($e) {
        console.log($e)
        // throw new Error(`Failed to fetch ${address + scope}.`)

    }
}
