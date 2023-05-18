import React from 'react'

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
                        O8:00 - 17:00
                    </div>
                </div>
            </div>

            <div className="r flex verti fullH bortom gap10" id="merchant_product">
                <div className="em1_25 b">
                    Your Products
                </div>

                <div className="r flex" id="merchant_product_scroller">
                    a
                </div>
            </div>
        </>
    )
}
