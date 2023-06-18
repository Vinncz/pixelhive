import Link from 'next/link'
import React, { JSXElementConstructor } from 'react'
import FormatCurrency from '../../../scripts/FormatCurrency';
import index_products_by_group from '@/lib/fetch/index/index_products_by_group';
import index_product_groups_by_tags from '@/lib/fetch/index/index_product_groups_by_tags';
import index_product_image_by_product_id from '@/lib/fetch/index/index_product_image_by_product_id';
import Cookies from "js-cookie";

var elementCount = 0;

export default async function ProductsSection (param: any) {
    const product_groups: Promise<ProductGroup[]> = await index_product_groups_by_tags(param.tag_id, Cookies.get('jwt'))
    const group_data = await product_groups;

    var page = null;
    if (group_data.length > 0) {
        const content = group_data.map(async group => {
            const PROMISE_products: Promise<Product[]> = await index_products_by_group(group.product_group_id.toString(), Cookies.get('jwt'))
            const ARRAYoOBJECT_product_data = await PROMISE_products

            /* ambil produk pertama di setiap grup */
            if (ARRAYoOBJECT_product_data.length <= 0) return (<></>)
            const product = ARRAYoOBJECT_product_data[0]

            const PROMISE_product_cover: Promise<ProductImage[]> = await index_product_image_by_product_id(product.product_id.toString(), Cookies.get('jwt'))
            const ARRAYoOBJECT_product_cover = await PROMISE_product_cover
            const product_cover = ARRAYoOBJECT_product_cover[0].image_location

            return (
                <>
                    <Link className='popupEl r hideOverflow gap10 boxedEl1 borrad5 productCard fullW fullH' href={'../../../product/' + product.product_id}>
                        <div className="productCardImg r grid hideOverflow">
                            <img decoding='async' src={'http://localhost:8000/storage/' + product_cover} alt="" />
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
