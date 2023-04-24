import Link from 'next/link'
import React, { JSXElementConstructor } from 'react'
import FormatCurrency from '../../../scripts/FormatCurrency';
import index_products_by_group from '@/lib/fetch/index/index_products_by_group';
import index_product_groups_by_tags from '@/lib/fetch/index/index_product_groups_by_tags';

var elementCount = 0;

export default async function ProductsSection (param: any) {
    const product_groups: Promise<ProductGroup[]> = await index_product_groups_by_tags(param.tag_id)
    const group_data = await product_groups;

    var page = null;
    if (group_data.length > 0) {
        const content = group_data.map(async group => {
            const products: Promise<Product[]> = await index_products_by_group(group.product_group_id.toString())
            const product_data = await products

            if (product_data.length <= 0) return (<></>)
            var product = product_data[0]

            return (
                <>
                    <Link className='popupEl r hideOverflow gap10 boxedEl1 borrad5 productCard fullW fullH' href={'../../../product/' + product.product_id}>
                        <div className="productCardImg r grid hideOverflow">
                            <img decoding='async' src="https://images.unsplash.com/photo-1551925608-7ae602b0def0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                        </div>
                        <div className="productCardDetails pad15 gap10 flex r verti">
                            <div className='productCardTitle em1_05 bottomVerti'>
                                {product.product_name}
                            </div>
                            <div className='grid productCardPrice em1_15 martom5 b centerVerti'>
                                Rp.{FormatCurrency(product.product_price)},-
                            </div>
                        </div>
                    </Link>
                </>
            )
        })

        const resolvedContent = await Promise.all(content)
        const children = resolvedContent.filter(c => c !== null)

        return (
            <div className="fullW r autoGridH verti gap10 martom30">
                {children}
            </div>
        )

    } else {
        return (
            <div className="fullW fullH centerHori centerVerti flex r boxedEl1 borrad5">
                Wah, produknya kosong nih!
                <br />
                Gimana kalo liat tag lain? Siapa tau jodoh..
            </div>
        )
    }
}

export function CardCount () {
    return elementCount;
}
