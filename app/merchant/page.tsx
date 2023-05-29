import React from 'react'
import ProductCard from '../components/ProductCard'
import './page.css'

export default function page() {
    return (
        <>
            <div className="r pad25 boxedEl1 borrad10 flex gap25 martom30" id="merchant_info">
                <div className="r boxedEl1 borradMAX flex centerHori centerVerti hideOverflow" id="merchant_picture">
                    <img src="https://picsum.photos/100/100" alt="" />
                </div>
                <div className="flex verti r centerHori gap10">
                    <div className="r flex em1_5 b" id="merchant_name">
                        The ProCreate-sinator
                    </div>
                    <div className="r flex em_1" id="merchant_operational_hour">
                        Bandung City
                    </div>
                </div>
            </div>

            {
                /*
                    * For the time being, due to time constraint, merchant page will be focused to be able to insert + view only.
                    * Update and delete operations may come later.
                 */
            }

            <div className="r flex verti bortom gap15 padtom30 bortom1">
                <div className="em1_25 b">
                    Shop Status
                </div>

                <div className="flex hori gap15 borrad5 dynamic_scroller">
                    <div className="flex fullW fullH pad25 borrad5 verti gap15 minWidth" id="transaction">
                        <span className='noSelect white'>Total Transactions</span>
                        <h2 className='white'> 14 Successful Transactions </h2>
                    </div>
                    <div className="flex fullW fullH pad25 borrad5 verti gap15 minWidth" id="revenue">
                        <span className='noSelect white'>Total Revenue</span>
                        <h2 className='white'> Rp.3.999.999,- </h2>
                    </div>
                </div>
            </div>

            <div className="r flex verti gap15 padtom30 padtop30 martop15" id="merchant_product">
                <div className="em1_25 b">
                    Your Products
                </div>

                <div className="padtop10 padtom10 padleft10" id="merchant_product_scroller">
                    <ProductCard image_src='https://picsum.photos/200/300' price={255} name='Digital Photography of a Dog in a Shower'></ProductCard>
                    <ProductCard image_src='https://picsum.photos/200/200' price={255} name='Digital Photography of a Dog in a Shower'></ProductCard>
                    <ProductCard image_src='https://picsum.photos/200/400' price={255} name='Digital Photography of a Dog in a Shower'></ProductCard>
                    <ProductCard image_src='https://picsum.photos/200/200' price={255}></ProductCard>
                    <ProductCard image_src='https://picsum.photos/200/300' price={255}></ProductCard>
                </div>
            </div>
        </>
    )
}
