'use client'
import index_tags from '@/lib/fetch/index/index_tags'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import Cookies from "js-cookie";

export default function Tags() {
    const [tags, setTags] = useState<any[]>([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:8000/api/tags', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                },
            });
            const data = await response.json();
            setTags(data.data);
        }

        fetchData();
        
    }, []);

    const content = tags.map(tag => (
        <Link key={tag.tag_id} href={`../tag/${tag.tag_id}`}>
            <div className='popupEl pad30 boxedEl1 borrad5'>
                {tag.tag_name}
            </div>
        </Link>
    ));

    return <>{content}</>;
}
