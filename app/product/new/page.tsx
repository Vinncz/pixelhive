"use client"
import PageTitle from '@/app/components/PageTitle'
import React, { useState } from 'react'

export default function page() {

    const [inputs, setInputs] = useState(['']);
    const [images, setImages] = useState<File[]>([]);
    const [prices, setPrices] = useState<number[]>([0]);
    const [parentProductName, setParentProductName] = useState('');

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
    };

    const handleSubmit = async () => {
        var formdata = new FormData();
        const combinedData = {
            inputs: inputs.join(','),
            prices: prices.join(','),
            parentProductName: parentProductName
        };

        formdata.append('data', JSON.stringify(combinedData));
        for (let i = 0; i < images.length; i++) {
            formdata.append('images[]', images[i]);
        }
        const response = await fetch('http://localhost:8000/api/products/store-batch', {
            method: 'POST',
            body: formdata,
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
            <PageTitle title='Adding a New Product' />
            {inputs.length > 1 ? (
                <div className="flex verti gap15">
                    <span className='em1_25 noSelect'>Product Parent Name</span>
                    <input type="text" className='pad15 borrad5 nobor' style={{ "outline": "none" }} onChange={(event) => inputs.length > 1 ? setParentProductName(event.target.value) : setParentProductName('')} value={parentProductName} />
                </div>
            ) : null}
            {inputs.map((input, index) => (
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
                    </div>
                </div>
            ))}
            <button onClick={handleAddInput} className='pad15 borrad5 boxedEl1 ptr martop10'>Add More</button>
            <div className="flex verti gap15 martop15">
                <div className="flex gap15 fullW">
                    <button className='fullW greenButton pad15 borrad5 ptr martop15' onClick={() => handleSubmit()}> Submit </button>
                    <button className='fullW redButton pad15 borrad5 ptr martop15'> Cancel </button>
                </div>
            </div>
        </>
    )
}
