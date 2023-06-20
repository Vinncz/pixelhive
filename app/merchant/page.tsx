"use client"
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import './page.css'
import fetchUserData from '../middleware/merchant'
import { useRouter } from 'next/navigation';
import Link from 'next/link'

export default function page() {
    const { push } = useRouter();
    const [merchantName, setMerchantName] = useState('')
    const [merchantImage, setMerchantImage] = useState('')
    const [product, setProduct] = useState<any[]>([])
    const [revenue, setRevenue] = useState(0)
    const [successfulTransaction, setSuccessfulTransaction] = useState(0)
    
    useEffect(() => {
        const getProduct = async (data: { merchant: { merchant_id: string } }) => {
            const response = await fetch('http://localhost:8000/api/products/merchant-id/' + data.merchant.merchant_id, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                credentials: 'include'
            });

            let product_group = await response.json();
            setProduct(product_group.data);
        };

        const getRevenue = async (data: { merchant: { merchant_id: string } }) => {
            const response = await fetch('http://localhost:8000/api/transaction/revenue/merchant-id/' + data.merchant.merchant_id, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                credentials: 'include'
            });

            let total_revenue = await response.json();
            setRevenue(total_revenue.data);
        };

        const getSuccesfulTransaction = async (data: { merchant: { merchant_id: string } }) => {
            const response = await fetch('http://localhost:8000/api/transaction/revenue/success/merchant-id/' + data.merchant.merchant_id, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                credentials: 'include'
            });

            let total_success_trans = await response.json();
            setSuccessfulTransaction(total_success_trans.data);
        };

        const fetchData = async () => {
            let data = await fetchUserData();
            if (Object.keys(data).length == 0) {
                push('/');
            }

            // other auth
            if (!Object.keys(data).includes('merchant') || !data.merchant) {
                push('/merchant/new');
            }

            // logic goes here
            console.log(data);
            setMerchantName(data.merchant.merchant_name)
            setMerchantImage(data.merchant.merchant_image)

            await getProduct(data);
            await getRevenue(data);
            await getSuccesfulTransaction(data);
        };
        fetchData();
    }, []);
    return (
        <>
            <div className="r pad25 boxedEl1 borrad10 flex gap25 martom30" id="merchant_info">
                <div className="r boxedEl1 borradMAX flex centerHori centerVerti hideOverflow" id="merchant_picture">
                    <img src={'http://localhost:8000/storage/' + merchantImage} alt="" style={{maxHeight: '4rem'}}/>
                </div>
                <div className="flex verti r centerHori gap10">
                    <div className="r flex em1_5 b" id="merchant_name">
                        {merchantName}
                    </div>
                    <div className="r flex em_1" id="merchant_operational_hour">
                        Bandung City
                    </div>
                </div>
            </div>

            <div className="r flex verti bortom gap15 padtom30 bortom1">
                <div className="em1_25 b">
                    Shop Status
                </div>

                <div className="flex hori gap15 borrad5 dynamic_scroller">
                    <div className="flex fullW fullH pad25 borrad5 verti gap15 minWidth" id="transaction">
                        <span className='noSelect white'>Total Transactions</span>
                        <h2 className='white'> {successfulTransaction} Successful Transactions </h2>
                    </div>
                    <div className="flex fullW fullH pad25 borrad5 verti gap15 minWidth" id="revenue">
                        <span className='noSelect white'>Total Revenue</span>
                        <h2 className='white'> Rp.{revenue},- </h2>
                    </div>
                </div>
            </div>

            <div className="r flex verti gap15 padtom30 padtop30 martop15" id="merchant_product">
                <div className="em1_25 b flex fullW" style={{justifyContent: 'space-between', alignItems: 'center'}}>
                    <h4>Your Products</h4> 
                    <Link href='/product/new' className='greenButton pad10 borrad10' style={{fontSize: '.8em'}}>Add Product</Link>
                </div>

                <div className="padtop10 padtom10 padleft10" id="merchant_product_scroller">
                    {product.length > 0 ? (
                        <>
                            {product.map((product, index) => (
                                <ProductCard image_src={'http://localhost:8000/storage/' + product.image[0]?.image_location} price={product.product_price} name={product.product_name} key={index} productGroup={product.group.group_id}></ProductCard>
                                // <ProductCard image_src={product.image[0]?.image_location} price={255} name={product.product_name} key={index} productGroup={product.group.group_id}></ProductCard>
                                // <h1>{product.group.group_id}</h1>
                            ))}
                        </>
                    ) : (
                        <p>No products found.</p>
                    )}
                </div>
            </div>
        </>
    )
}
