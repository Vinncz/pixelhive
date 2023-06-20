"use client"
import PageTitle from '@/app/components/PageTitle'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function page({ params: { id } }: any) {
   const { push } = useRouter();
   const [oldProductId, setOldProductId] = useState(['']);
   const [oldImages, setOldImages] = useState(['']);
   const [inputs, setInputs] = useState(['']);
   const [images, setImages] = useState<File[]>([]);
   const [prices, setPrices] = useState<number[]>([0]);
   const [parentProductName, setParentProductName] = useState('');
   const [tags, setTags] = useState(['']);
   const [selectedTag, setSelectedTag] = useState<any>('');

   useEffect(() => {
      const getProduct = async () => {
         const response = await fetch('http://localhost:8000/api/product-group/product-by-product-groups/' + id, {
            method: 'GET',
            headers: {
               "Accept": "application/json",
               "Content-Type": "application/json"
            },
            credentials: 'include'
         });
         let productResponse = await response.json();
         let dataProductResponse = productResponse.data;
         console.log(dataProductResponse.product);
         if (dataProductResponse.product.length > 1) {
            setParentProductName(dataProductResponse.group_name)
         }
         const productNames = dataProductResponse.product.map((element: any) => element.product_name);
         setInputs(productNames);
         const productPrices = dataProductResponse.product.map((element: any) => element.product_price);
         setPrices(productPrices);
         const oldProductId = dataProductResponse.product.map((element: any) => element.product_id);
         setOldProductId(oldProductId);
         const productImage = dataProductResponse.product.map((element: any) => element.image[0].image_location);
         productImage.forEach((element: any) => {
            images.push(new File([], 'empty'));
         });
         console.log(images);
         setOldImages(productImage);
      };

      const getTags = async () => {
         const response = await fetch('http://localhost:8000/api/tags', {
            method: 'GET',
            headers: {
               "Accept": "application/json",
               "Content-Type": "application/json"
            },
            credentials: 'include'
         });
         let responseData = await response.json();
         let data = responseData.data;
         setTags(data);
         setSelectedTag(data[0].tag_id);
      };

      const getSelectedTags = async () => {
         const response = await fetch('http://localhost:8000/api/tags/selected-tag/' + id, {
            method: 'GET',
            headers: {
               "Accept": "application/json",
               "Content-Type": "application/json"
            },
            credentials: 'include'
         });
         if (response.ok) {
            let responseData = await response.json();
            let data = responseData.data;
            setSelectedTag(data.product_tags_id);
         }
      };

      getProduct();
      getTags();
      getSelectedTags();
   }, [])


   const handleInputChange = (index: any, event: any) => {
      const newInputs = [...inputs];
      newInputs[index] = event.target.value;
      setInputs(newInputs);
   };

   const handlePriceChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
      const newPrices = [...prices];
      newPrices[index] = parseFloat(event.target.value);
      setPrices(newPrices);
   };

   const handleImageChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
         const newImages = [...images];
         newImages[index] = file;
         setImages(newImages);
      }
   };

   const handleAddInput = () => {
      setInputs([...inputs, '']);
      setPrices([...prices, 0]);
      setImages([...images, new File([], '')]);
   };

   const handleRemoveInput = (index: any) => {
      const newInputs = [...inputs];
      newInputs.splice(index, 1);
      setInputs(newInputs);

      const newPrices = [...prices];
      newPrices.splice(index, 1);
      setPrices(newPrices);

      const newImages = [...images];
      newImages.splice(index, 1);
      setImages(newImages);

      const newProductId = [...oldProductId];
      newProductId.splice(index, 1);
      setOldProductId(newProductId);

      const newOldImages = [...oldImages];
      newOldImages.splice(index, 1);
      setOldImages(newOldImages);
   };

   const handleSubmit = async () => {
      var formdata = new FormData();
      let combinedData = {};
      if (oldProductId.length > 0) {
         combinedData = {
            oldProductId: oldProductId.join(','),
            inputs: inputs.join(','),
            prices: prices.join(','),
            parentProductName: parentProductName,
            selectedTag: selectedTag
         };
      }
      else {
         combinedData = {
            inputs: inputs.join(','),
            prices: prices.join(','),
            parentProductName: parentProductName,
            selectedTag: selectedTag
         };
      }

      formdata.append('data', JSON.stringify(combinedData));
      for (let i = 0; i < images.length; i++) {
         formdata.append('images[]', images[i]);
      }

      const response = await fetch('http://localhost:8000/api/products/update-batch/' + id, {
         method: 'POST',
         body: formdata,
         credentials: 'include',
         headers: {
            "Accept": "application/json",
         },
      });

      const data = await response.json();
      if (response.ok) {
         push('/merchant')
      }
   }

   const handleDeleteAll = async () => {
      const response = await fetch('http://localhost:8000/api/products/delete-batch/' + id, {
         method: 'POST',
         credentials: 'include',
         headers: {
            "Accept": "application/json",
         },
      });

      const data = await response.json();
      console.log(data);
   }

   return (
      <>
         <PageTitle title='Edit Product' />
         {inputs.length > 1 ? (
            <div className="flex verti gap15">
               <span className='em1_25 noSelect'>Product Parent Name</span>
               <input type="text" className='pad15 borrad5 nobor' style={{ "outline": "none" }} onChange={(event) => inputs.length > 1 ? setParentProductName(event.target.value) : setParentProductName('')} value={parentProductName} />
            </div>
         ) : null}
         {inputs.length < 1 ? null : inputs.map((input, index) => (
            <div key={index}>
               <h3 className='martop15' style={{ color: 'teal' }}>Product {index + 1}</h3>
               <div className="gridH2 gap30">
                  <div className="flex verti gap15">
                     <span className='em1_25 noSelect'> Product Name </span>
                     <input type="text" className='pad15 borrad5 nobor' style={{ "outline": "none" }} onChange={(event) => handleInputChange(index, event)} value={input} />
                  </div>
                  <div className="flex verti gap15">
                     <span className='em1_25 noSelect'> Product Price </span>
                     <input type="number" className='pad15 borrad5 nobor' style={{ "outline": "none" }} onChange={(event) => handlePriceChange(index, event)} value={prices[index]} />
                  </div>
                  <div className="flex verti gap15">
                     <span className='em1_25 noSelect'> Product Image </span>
                     <input type="file" className='pad15 borrad5 boxedEl1 ptr' style={{ "outline": "none", display: "none" }} onChange={(event) => handleImageChange(index, event)} id={"img" + index} />
                     <label htmlFor={"img" + index} style={{ padding: '1rem', backgroundColor: 'lightskyblue', color: 'white', borderRadius: '.2rem', textAlign: 'center' }}>Click me to upload image</label>
                     {images[index] && <span>{images[index].name}</span>}
                  </div>
                  {inputs.length > 1 ? (
                     <div className="flex verti gap15">
                        <span className='em1_25 noSelect'> Remove This Product? </span>
                        <button className='pad15 borrad5' onClick={() => handleRemoveInput(index)}>Remove</button>
                     </div>
                  ) : null}
                  {oldImages.length >= 1 ? (
                     <div className="flex verti gap15">
                        <span className='em1_25 noSelect'> Previous Image </span>
                        <img src={"http://localhost:8000/storage/" + oldImages[index]} alt="" style={{ maxHeight: '15rem' }} />
                     </div>
                  ) : null
                  }
               </div>
            </div>
         ))}
         <button onClick={handleAddInput} className='pad15 borrad5 boxedEl1 ptr martop10'>Add More</button>
         <div className="martop25 flex verti gap15">
            <span className='em1_25 noSelect'> Product Tags </span>
            <select name="product" className='pad15 borrad5' id="prod" onChange={(e) => {
               setSelectedTag(e.target.value)
            }}>
               {tags.length > 0 ? (
                  tags.map((tag: any) => {
                     return <option value={tag.tag_id} selected={tag.tag_id === selectedTag}>{tag.tag_name}</option>;
                  })
               ) : (
                  <option value="1">test</option>
               )}
            </select>
         </div>
         <div className="flex verti gap15 martop15">
            <div className="flex gap15 fullW">
               <button className='fullW greenButton pad15 borrad5 ptr martop15' onClick={() => handleSubmit()}> Submit </button>
               <button className='fullW orangeButton pad15 borrad5 ptr martop15'> Cancel </button>
            </div>
            <div className="flex gap15 fullW">
               <button className='fullW redButton pad15 borrad5 ptr martop15' onClick={() => handleDeleteAll()}> Delete All </button>
            </div>
         </div>
      </>
   )
}
