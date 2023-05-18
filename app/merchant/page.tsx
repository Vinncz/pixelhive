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

            <div className="r flex verti bortom gap15 bortom1 padtom30 padtop30" id="merchant_product">
                <div className="em1_25 b">
                    Your Products
                </div>

                {
                    /*
                     * There is the need to make a CARD ELEMENT that takes in images, name, and price.
                     * Might make it in the next commit or two.
                     *
                     * For the time being, due to time constraint, merchant page will be focused to be able to insert + view only.
                     * Update and delete operations may come later.
                     */
                }

                <div className="r flex gap15" id="merchant_product_scroller">
                    <a className="popupEl r hideOverflow gap10 boxedEl1 borrad5 productCard fullW fullH"
                        href="../../../product/1">
                        <div className="productCardImg r grid hideOverflow">
                            <img decoding="async" src="http://localhost:8000/storage/https://picsum.photos/200/300" alt="" />
                        </div>

                        <div className="productCardDetails pad15 gap10 flex r verti">
                            <div className="productCardTitle em1_05 bottomVerti">Brush Pack for ProCreate</div>
                            <div className="grid productCardPrice em1_15 martom5 b centerVerti">Rp.299.999,- </div>
                        </div>
                    </a>
                    <a className="popupEl r hideOverflow gap10 boxedEl1 borrad5 productCard fullW fullH"
                        href="../../../product/1">
                        <div className="productCardImg r grid hideOverflow">
                            <img decoding="async" src="http://localhost:8000/storage/https://picsum.photos/200/300" alt="" />
                        </div>

                        <div className="productCardDetails pad15 gap10 flex r verti">
                            <div className="productCardTitle em1_05 bottomVerti">Brush Pack for ProCreate</div>
                            <div className="grid productCardPrice em1_15 martom5 b centerVerti">Rp.299.999,- </div>
                        </div>
                    </a>
                    <a className="popupEl r hideOverflow gap10 boxedEl1 borrad5 productCard fullW fullH"
                        href="../../../product/1">
                        <div className="productCardImg r grid hideOverflow">
                            <img decoding="async" src="http://localhost:8000/storage/https://picsum.photos/200/300" alt="" />
                        </div>

                        <div className="productCardDetails pad15 gap10 flex r verti">
                            <div className="productCardTitle em1_05 bottomVerti">Brush Pack for ProCreate</div>
                            <div className="grid productCardPrice em1_15 martom5 b centerVerti">Rp.299.999,- </div>
                        </div>
                    </a>
                    <a className="popupEl r hideOverflow gap10 boxedEl1 borrad5 productCard fullW fullH"
                        href="../../../product/1">
                        <div className="productCardImg r grid hideOverflow">
                            <img decoding="async" src="http://localhost:8000/storage/https://picsum.photos/200/300" alt="" />
                        </div>

                        <div className="productCardDetails pad15 gap10 flex r verti">
                            <div className="productCardTitle em1_05 bottomVerti">Brush Pack for ProCreate</div>
                            <div className="grid productCardPrice em1_15 martom5 b centerVerti">Rp.299.999,- </div>
                        </div>
                    </a>
                    <a className="popupEl r hideOverflow gap10 boxedEl1 borrad5 productCard fullW fullH"
                        href="../../../product/1">
                        <div className="productCardImg r grid hideOverflow">
                            <img decoding="async" src="http://localhost:8000/storage/https://picsum.photos/200/300" alt="" />
                        </div>

                        <div className="productCardDetails pad15 gap10 flex r verti">
                            <div className="productCardTitle em1_05 bottomVerti">Brush Pack for ProCreate</div>
                            <div className="grid productCardPrice em1_15 martom5 b centerVerti">Rp.299.999,- </div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}
