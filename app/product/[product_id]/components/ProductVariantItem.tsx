'use client'
import FormatCurrency from '@/app/scripts/FormatCurrency'
import React, { useEffect, useState } from 'react'
import index_products_by_group from '@/lib/fetch/index/index_products_by_group'
import Cookies from "js-cookie";

type Param = {
    group_id: string,
    current_product_id: number
}

export default function ProductVariantItem({ group_id, current_product_id }: Param) {
    const [associatedProduct, setAssociatedProduct] = useState<ProductData[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data: Promise<ProductData[]> = index_products_by_group(group_id, Cookies.get('jwt'));
                const associatedProduct = await data;
                setAssociatedProduct(associatedProduct);
            } catch (error) {
                // Handle error
            }
        }

        fetchData();
    }, [group_id]);

    var classes = "ptr flex verti productVariantItem pad15 centerHori fullH "

    const content = associatedProduct.map(item => {
        var thisclasses = classes
        if (item.product_id == current_product_id)
            thisclasses += "selected"

        return (
            <a href={'./' + item.product_id} className={thisclasses} key={item.product_id} >
                <span className='flex fullW spaceBetweenH em_6 opacity_5'>
                    <span> Variant </span>
                    <span> Excl. VAT 11% </span>
                </span>
                <span className='flex fullW spaceBetweenH gap25'>
                    <span> {item.product_name.substring(0, 15)} </span>
                    <span> {FormatCurrency(item.product_price)} </span>
                </span>
            </a>
        );
    });

    return <div>{content}</div>;
}
