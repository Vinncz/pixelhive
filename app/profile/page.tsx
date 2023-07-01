"use client"
import React, { useEffect, useState } from 'react'
import './profile_page.css'
import PageTitle from '../components/PageTitle'
import { useRouter } from 'next/navigation';

export default function page() {
    const { push } = useRouter();
    const [user, setUser] = useState<any>('');
    const [newUser, setNewUser] = useState<any>('');
    const [newPassword, setNewPassword] = useState<any>('');
    const [merchant, setMerchant] = useState<any>('');
    const [newMerchant, setNewMerchant] = useState<any>('');

    const [userImage, setUserImage] = useState<File>(new File([], ''));
    const [merchantImage, setMerchantImage] = useState<File>(new File([], ''));

    const [has_merchant_account, setMerchantAccount] = useState<any>(false);

    useEffect(() => {
        const getUserWithMerchantData = async () => {
            const response = await fetch('http://localhost:8000/api/user/merchant', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                credentials: 'include',
                cache: 'no-store'
            });
            let fetchData = await response.json();
            setUser(fetchData);
            setNewUser(fetchData);

            setMerchantAccount(fetchData.merchant)

            setMerchant(fetchData.merchant);
            setNewMerchant(fetchData.merchant);
            console.log(fetchData);
        }
        getUserWithMerchantData();
    }, [])

    const handleSubmit = async () => {
        console.log(newUser, newPassword, newMerchant, userImage, merchantImage);
        var formdata = new FormData();
        formdata.append('data', JSON.stringify({
            user: newUser,
            password: newPassword,
            merchant: newMerchant,
        }));
        formdata.append('merchantImage', merchantImage);
        formdata.append('userImage', userImage);

        const response = await fetch('http://localhost:8000/api/user/update-profile', {
            method: 'POST',
            body: formdata,
            credentials: 'include',
            headers: {
                "Accept": "application/json",
            },
            cache: 'no-store'
        });

        const data = await response.json();
        console.log(data);

        window.location.reload()
    }
    return (
        <>
            <PageTitle title='My Account' />

            <div className="flex verti gap30 martom30 padtom30">
                <span className='em1_5 bortom1 padtom15 martop15'> Customer Profile </span>

                <div className="flex fullW gap30 martop30">
                    <div className="borradMAX hideOverflow" style={{ width: "fit-content", maxHeight: "125px" }}>
                        <img src={'http://localhost:8000/storage/' + user.user_image} className='fullH fullW' style={{ objectFit: "cover", aspectRatio: "1/1" }} alt="" />
                    </div>
                    <div className="flex verti fullH centerHori gap5">
                        <span className="b em1_5"> {user.username} </span>
                        <span className="em1_15"> {user.email} </span>
                    </div>
                </div>

                <div className="flex hori fullW gap30 martop30">
                    <div className="flex verti gap15 fullW fullH">
                        <span className="noSelect em1_15"> Username </span>
                        <input type="text" name="username" className="pad15 borrad5 nobor" value={newUser.username} onChange={(e) => {
                            let temp = { ...newUser };
                            temp.username = e.target.value;
                            setNewUser(temp);
                        }} />
                    </div>
                    <div className="flex verti gap15 fullW fullH">
                        <span className="noSelect em1_15"> Email </span>
                        <input type="email" name='email' className='pad15 borrad5 nobor' value={newUser.email} onChange={(e) => {
                            let temp = { ...newUser };
                            temp.email = e.target.value;
                            setNewUser(temp);
                        }} />
                    </div>
                </div>
                <div className="flex hori fullW gap30">
                    <div className="flex verti gap15 fullW fullH">
                        <span className="noSelect em1_15"> Password </span>
                        <input type="password" name='password' className='pad15 borrad5 nobor' value={newPassword} onChange={(e) => { setNewPassword(e.target.value) }} />
                    </div>
                    <div className="flex verti gap15 fullW fullH">
                        <span className="noSelect em1_15"> Profile Picture </span>
                        <input type="file" name='customer_image' id='customer_image' className='pad15 borrad5 nobor' style={{ display: "none" }} onChange={
                            (event) => {
                                const selectedFile = event.target.files?.[0];
                                if (selectedFile) {
                                    setUserImage(selectedFile);
                                }
                            }
                        } />
                        <label htmlFor="customer_image" className='fullW fullH greenOutlineButton borrad5 flex centerHori centerVerti ptr b'> Select an image </label>
                    </div>
                </div>
            </div>

            { has_merchant_account ? (

                <div className="flex verti gap30 martop30 martom30 padtom30 bortom1">
                    <span className='em1_5 bortom1 padtom15 martop15'> Merchant Profile </span>

                    <div className="flex fullW gap30 martop30">
                        <div className="borradMAX hideOverflow" style={{ width: "fit-content", maxHeight: "125px" }}>
                            <img src={'http://localhost:8000/storage/' + merchant.merchant_image} className='fullH fullW' style={{ objectFit: "cover", aspectRatio: "1/1" }} alt="" />
                        </div>
                        <div className="flex verti fullH centerHori gap5">
                            <span className="b em1_5"> {merchant.merchant_name} </span>
                        </div>
                    </div>
                    <div className="flex fullW gap30 martop30">
                        <div className="borradMAX hideOverflow" style={{ width: "fit-content", maxHeight: "125px" }}>
                            <img src={'http://localhost:8000/storage/' + merchant.merchant_image} className='fullH fullW' style={{ objectFit: "cover", aspectRatio: "1/1" }} alt="" />
                        </div>
                        <div className="flex verti fullH centerHori gap5">
                            <span className="b em1_5"> {merchant.merchant_name} </span>
                        </div>
                    </div>

                    <div className="flex hori fullW gap30">
                        <div className="flex verti gap15 fullW fullH">
                            <span className="noSelect em1_15"> Shop Name </span>
                            <input type="text" name='shop_name' className='pad15 borrad5 nobor' value={newMerchant.merchant_name} onChange={(e) => {
                                let temp = { ...newMerchant };
                                temp.merchant_name = e.target.value;
                                setNewMerchant(temp);
                            }} />
                        </div>
                        <div className="flex verti gap15 fullW fullH">
                            <span className="noSelect em1_15"> Shop Profile Picture </span>
                            <input type="file" name='shop_image' id='shop_image' className='pad15 borrad5 nobor' style={{ display: "none" }} onChange={
                                (event) => {
                                    const selectedFile = event.target.files?.[0];
                                    if (selectedFile) {
                                        setMerchantImage(selectedFile);
                                    }
                                }
                            } />
                            <label htmlFor="shop_image" className='fullW fullH greenOutlineButton borrad5 flex centerHori centerVerti ptr b'> Select an image </label>
                        </div>
                    </div>
                </div>

            ) : (<></>)}

            <div className="flex verti r martop30 gap10">
                <span className='em1_5 b code noSelect'> Dangerous Zone </span>
                <span> Once taken, actions cannot be reverted. </span>

                <div className="flex hori gap30 martop15">
                    <button className='greenButton pad15 borrad5 ptr b fullW' onClick={() => handleSubmit()}> Update </button>
                    <button className='redOutlineButton pad15 borrad5 ptr b fullW'> Cancel </button>
                </div>
            </div>

        </>
    )
}
