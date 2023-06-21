"use client"
import PageTitle from '@/app/components/PageTitle'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function page() {

    const { push } = useRouter();
    const [inputs, setInputs] = useState(['']);
    const [images, setImages] = useState<File[]>([]);
    const [prices, setPrices] = useState<number[]>([0]);
    const [descriptions, setDescriptions] = useState(['']);
    const [parentProductName, setParentProductName] = useState('');
    const [tags, setTags] = useState(['']);
    const [selectedTag, setSelectedTag] = useState<any>('');

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

    const handleAddInput = () => {
        setInputs([...inputs, '']);
        setPrices([...prices, 0]);
        setImages([...images, new File([], '')]);
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

        const newDescriptions = [...descriptions];
        newDescriptions.splice(index, 1);
        setDescriptions(newDescriptions);
    };

    const handleSubmit = async () => {
        var formdata = new FormData();
        const combinedData = {
            inputs: inputs.join(','),
            prices: prices.join(','),
            parentProductName: parentProductName,
            selectedTag: selectedTag,
            descriptions: descriptions.join(',')
        };

        formdata.append('data', JSON.stringify(combinedData));
        for (let i = 0; i < images.length; i++) {
            formdata.append('images[]', images[i]);
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

         {inputs.length > 1 ? (
            <div className="flex verti gap15 martom30">
               <span className='em1_25 noSelect'> What's the Name of this Aggregate? (Required) </span>
               <input type="text" className='pad15 borrad5 boxedEl1' onChange={(event) => inputs.length > 1 ? setParentProductName(event.target.value) : setParentProductName('')} value={parentProductName} />
            </div>
         ) : null}

         {inputs.length < 1 ? null : inputs.map((input, index) => (
            <div key={index} className='martom30'>
               <div className='martop15 martom15 em1_5 b'>Product {index + 1} </div>
               <div className="boxedEl1 pad30 borrad15">
                  <div className='gridH2 gap30'>
                     <div className="flex verti gap15">
                        <span className='em1_15 noSelect'> Product Name (Required) </span>
                        <input type="text" className='pad15 borrad5 boxedEl1' onChange={(event) => handleInputChange(index, event)} value={input} />
                     </div>
                     <div className="flex verti gap15">
                        <span className='em1_15 noSelect'> Product Price (Required) </span>
                        <input type="number" className='pad15 borrad5 boxedEl1' onChange={(event) => handlePriceChange(index, event)} value={prices[index]} />
                     </div>
                     <div className="flex verti gap15">
                        <span className='em1_25 noSelect'> Product Description (Recommended) </span>
                        <textarea className='pad15 borrad5 boxedEl1' style={{ "height": "200px", "resize": "vertical", "transition": "none" }} onChange={(event) => handleDescriptionChange(index, event)} value={descriptions[index]} />
                     </div>
                     <div className="flex verti gap15">
                        <span className='em1_15 noSelect'> Product Image (Required)</span>
                        <input type="file" className='pad15 borrad5 boxedEl1 ptr' style={{ "outline": "none", display: "none" }} onChange={(event) => handleImageChange(index, event)} id={"img" + index} />
                        <label className='b ptr greenOutlineButton pad15 borrad10 flex centerHori' htmlFor={"img" + index}> Select Image </label>
                        {images[index] && <span style={{"opacity": "50%"}} className='flex fullH fullW boxedEl1 pad25 noSelect centerHori centerVerti borrad15'>{images[index].name === 'empty' ? 'No new image selected' : images[index].name === '' || images[index].name === null ? 'No image selected' : images[index].name}</span>}
                     </div>
                  </div>

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
            <button onClick={handleAddInput} className='fullW orangeOutlineButton pad15 borrad5 ptr martop10 b'> Add Variant </button>
         </div>

         <div className="flex verti gap15">

            <div className="flex gap15 fullW martom30">
               <button className='fullW greenButton pad15 borrad5 ptr b martop15' onClick={() => handleSubmit()}> Update </button>
               <button className='fullW redButton pad15 borrad5 ptr b martop15' onClick={() => {push("/merchant")}}> Cancel </button>
            </div>
         </div>
      </>
   )
}
