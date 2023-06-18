'use client'
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState, useEffect } from 'react'
import cookie from 'cookie';

export default function page() {
   const { push } = useRouter();
   const [merchantName, setMerchantName] = useState('');
   const [merchantImage, setMerchantImage] = useState<File>(new File([], ''));
   const handleSubmit = async () => {
      var formdata = new FormData();
      formdata.append('data', JSON.stringify({
         merchantName: merchantName
      }));
      formdata.append('images[]', merchantImage);

      const response = await fetch('http://localhost:8000/api/merchants/register', {
         method: 'POST',
         body: formdata,
         credentials: 'include',
         headers: {
            "Accept": "application/json",
         },
      });

      const data = await response.json();
      if (response.ok) {
         push('/');  
      }
   }
   const page = (
      <div className='gridH2'>
         <div className="fullW fullH flex r borrad5 pad30 boxedEl1 verti gap30">
            <span className='em1_5 r b'> PixelHive™ </span>

            <div className="flex verti gap10">
               Merchant Name
               <input className='pad10 borrad5'
                  type="text" name="username" id="username"
                  value={merchantName}
                  onChange={(event) => setMerchantName(event.target.value)} />
            </div>
            <div className="flex verti gap10">
               Merchant Image
               <input
                  className='pad10 borrad5'
                  type="file"
                  name="password"
                  id="password"
                  onChange={(event) => {
                     const selectedFile = event.target.files?.[0];
                     if (selectedFile) {
                        setMerchantImage(selectedFile);
                     }
                  }}
               />
            </div>

            <button onClick={() => handleSubmit()} className='greenButton pad15 borrad5 ptr'> Register My Merchant </button>
         </div>
      </div>
   )

   return page
}
