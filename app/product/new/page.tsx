"use client"
import PageTitle from '@/app/components/PageTitle'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { validate_name, validate_price, validate_desc, validate_aggregate_name, validate_file_presence, validate_product_presence } from '../functions/validation';

export default function page() {

   const { push } = useRouter();
   const [inputs, setInputs] = useState(['']);
   const [images, setImages] = useState<File[]>([new File([], '')]);
   const [files, setFiles] = useState<File[]>([new File([], '')]);
   const [prices, setPrices] = useState<number[]>([0]);
   const [descriptions, setDescriptions] = useState(['']);
   const [parentProductName, setParentProductName] = useState('');
   const [tags, setTags] = useState(['']);
   const [selectedTag, setSelectedTag] = useState<any>('');

   const [error, setError] = useState<any>(0);
   const [errorName, setErrorName] = useState<any[]>([]);
   const [errorProdFile, setErrorProdFile] = useState<any[]>([]);
   const [errorPrice, setErrorPrice] = useState<any[]>([]);
   const [errorDesc, setErrorDesc] = useState<any[]>([]);
   const [errorImg, setErrorImg] = useState<any[]>([]);
   const [errorParent, setErrorParent] = useState<any[]>([]);


   useEffect(() => {
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
      }
      getTags()
   }, [])

   const handleInputChange = (index: any, event: any) => {
      const newInputs = [...inputs];
      newInputs[index] = event.target.value;
      setInputs(newInputs);
   };

   const handleDescriptionChange = (index: any, event: any) => {
      const newDescriptions = [...descriptions];
      newDescriptions[index] = event.target.value;
      setDescriptions(newDescriptions);
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

   const handleFileChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
         const newFiles = [...files];
         newFiles[index] = file;
         setFiles(newFiles);
      }
   };

   const handleAddInput = () => {
      setInputs([...inputs, '']);
      setPrices([...prices, 0]);
      setImages([...images, new File([], '')]);
      setFiles([...images, new File([], '')]);
      setDescriptions([...descriptions, '']);
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

      const newFiles = [...files];
      newFiles.splice(index, 1);
      setFiles(newFiles);

      const newDescriptions = [...descriptions];
      newDescriptions.splice(index, 1);
      setDescriptions(newDescriptions);

   };

   const handleSubmit = async () => {
      const name_validation_result = validate_name(inputs)
      const price_validation_result = validate_price(prices)
      const desc_validation_result = validate_desc(descriptions)
      const aggregation_name_validation_result = validate_aggregate_name(parentProductName)
      const file_validation_result = validate_file_presence(images)
      const prod_validation_result = validate_product_presence(files)

      console.log(name_validation_result)
      console.log(price_validation_result)
      console.log(desc_validation_result)
      console.log(aggregation_name_validation_result)
      console.log(file_validation_result)
      console.log(prod_validation_result)

      setErrorName(name_validation_result[0]);
      setErrorPrice(price_validation_result[0]);
      setErrorDesc(desc_validation_result[0]);
      setErrorImg(file_validation_result[0]);
      setErrorParent(aggregation_name_validation_result[0]);
      setErrorProdFile(prod_validation_result[0]);

      console.log(errorName)
      console.log(errorPrice)
      console.log(errorDesc)
      console.log(errorImg)
      console.log(errorProdFile)
      console.log(errorParent)

      var formdata = new FormData();
      const combinedData = {
         inputs: inputs.join(','),
         prices: prices.join(','),
         parentProductName: parentProductName,
         selectedTag: selectedTag,
         descriptions: descriptions.join('○')
      };

      formdata.append('data', JSON.stringify(combinedData));
      for (let i = 0; i < images.length; i++) {
         formdata.append('images[]', images[i]);
      }

      for (let i = 0; i < files.length; i++) {
         formdata.append('files[]', files[i]);
      }

      console.log(JSON.stringify(combinedData))
      const response = await fetch('http://localhost:8000/api/products/store-batch', {
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

   return (
      <>
         <PageTitle title='Adding a New Product' />

         <div className="flex verti gap15 martom30">
            <span className='em1_25 noSelect'> Where Does Your Product Belong To? </span>
            <select name="product" className='pad15 borrad5' style={{ letterSpacing: "0.2px" }} id="prod" onChange={(e) => {
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

         {inputs.length > 1 ? (
            <div className="flex verti gap15 martom30">
               <span className='em1_25 noSelect'> What's the Name of this Aggregate? (Required) </span>
               <input type="text" className='pad15 borrad5 boxedEl1 code' style={{ letterSpacing: "0.2px;" }} onChange={(event) => inputs.length > 1 ? setParentProductName(event.target.value) : setParentProductName('')} value={parentProductName} />
               {errorParent && <p style={{color: "red", marginTop: "-15px"}}>{errorParent}</p>}
            </div>
         ) : null}

         {inputs.length < 1 ? null : inputs.map((input, index) => (
            <div key={index} className='martom30'>
                <div className='martop15 martom15 em1_5 b'>Product {index + 1} </div>
                <div className="boxedEl1 pad30 borrad15">
                  <div className='gridH2 gap30'>
                     <div className="flex verti gap15">
                        <span className='em1_15 noSelect'> Product Name (Required) </span>
                        <input type="text" className='pad15 borrad5 boxedEl1 code' onChange={(event) => handleInputChange(index, event)} value={input} />
                        {errorName[index] && <p style={{color: "red", marginTop: "-15px"}}>{errorName[index]}</p>}
                     </div>
                     <div className="flex verti gap15">
                        <span className='em1_15 noSelect'> Product Price (Required) </span>
                        <input type="number" className='pad15 borrad5 boxedEl1 code' onChange={(event) => handlePriceChange(index, event)} value={prices[index]} />
                        {errorPrice[index] && <p style={{color: "red", marginTop: "-15px"}}>{errorPrice[index]}</p>}
                     </div>
                     <div className="flex verti gap15">
                        <span className='em1_25 noSelect'> Product Description (Recommended) </span>
                        <textarea className='pad15 borrad5 boxedEl1 code' style={{ "height": "200px", "resize": "vertical", "transition": "none" }} onChange={(event) => handleDescriptionChange(index, event)} value={descriptions[index]} />
                        {errorDesc[index] && <p style={{color: "red", marginTop: "-15px"}}>{errorDesc[index]}</p>}
                     </div>
                     <div className="flex verti gap15">
                        <span className='em1_15 noSelect'> Product Image (Required)</span>
                        <input type="file" className='pad15 borrad5 boxedEl1 ptr' style={{ "outline": "none", display: "none" }} onChange={(event) => handleImageChange(index, event)} id={"img" + index} />
                        <label className='b ptr greenOutlineButton pad15 borrad10 flex centerHori' htmlFor={"img" + index}> Select Image </label>
                        {images[index] && <span style={{ "opacity": "50%" }} className='flex fullH fullW boxedEl1 pad25 noSelect centerHori centerVerti borrad15'>{images[index].name === 'empty' ? 'No new image selected' : images[index].name === '' || images[index].name === null ? 'No image selected' : images[index].name}</span>}
                        {errorImg[index] && <p style={{color: "red", marginTop: "-15px"}}>{errorImg[index]}</p>}
                     </div>
                  </div>
                  <div className="flex verti gap15 martop30">
                     <span className='em1_15 noSelect'>Product (Required)</span>
                     <input type="file" required className='pad15 borrad5 boxedEl1 ptr' style={{ "outline": "none", display: "none" }} onChange={(event) => handleFileChange(index, event)} id={"product" + index} />
                     <label className='b ptr greenOutlineButton pad15 borrad10 flex centerHori' htmlFor={"product" + index}>Select Product</label>
                     {files[index] && <span style={{ "opacity": "50%" }} className='flex fullH fullW boxedEl1 pad25 noSelect centerHori centerVerti borrad15'>{files[index].name === 'empty' ? 'No new image selected' : files[index].name === '' || files[index].name === null ? 'No image selected' : files[index].name}</span>}
                     {errorProdFile[index] && <p style={{color: "red", marginTop: "-15px"}}>{errorProdFile[index]}</p>}
                  </div>
                  {error > 0 ? (
                     <div className="flex verti gap15 martop30">
                        <span className='em1_15 noSelect'> Error </span>
                        <p style={{ color: 'red' }}>Error: {errorName[0][index] + ', '}{errorPrice[0][index] + ', '}{errorDesc[0][index] + ', '}{errorImg[0][index] + ', '}</p>
                     </div>
                  ) : null}



                  {inputs.length > 1 ? (
                     <div className="flex verti gap5 martop30">
                        <span className='em1_5 b code noSelect martop30'> Dangerous Zone </span>
                        <span> Once taken, actions cannot be reverted. </span>
                        <button className='pad15 borrad5 redOutlineButton ptr b martop15' onClick={() => handleRemoveInput(index)}>Remove</button>
                     </div>
                  ) : null}
               </div>
            </div>
         ))}

         <div className='flex verti gap15 martop30'>
            <span className='b em1_25'> Do You Wish to Add a Variant of Your Item? </span>
            <button onClick={handleAddInput} className='fullW orangeOutlineButton pad15 borrad5 ptr martop10 b noSelect'> Add Variant </button>
         </div>

         <div className="flex verti gap15">

            <div className="flex gap15 fullW martom30">
               <button className='fullW greenButton pad15 borrad5 ptr b martop15' onClick={() => handleSubmit()}> Upload </button>
               <button className='fullW redButton pad15 borrad5 ptr b martop15' onClick={() => { push("/merchant") }}> Cancel </button>
            </div>
         </div>
      </>
   )
}
