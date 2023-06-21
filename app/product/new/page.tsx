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
                            <span className='em1_25 noSelect'> Product Descriptions </span>
                            <textarea className='pad15 borrad5 nobor' style={{ "outline": "none" }} onChange={(event) => handleDescriptionChange(index, event)} value={descriptions[index]} />
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
            <div className="martop25 flex verti gap15">
                <span className='em1_25 noSelect'> Product Tags </span>
                <select name="product" className='pad15 borrad5' id="prod" onChange={(e) => {
                    setSelectedTag(e.target.value)
                }}>
                    {tags.length > 0 ? (
                        tags.map((tag: any) => {
                            return <option value={tag.tag_id}>{tag.tag_name}</option>;
                        })
                    ) : (
                        <option value="1">test</option>
                    )}
                </select>
            </div>
            <div className="flex verti gap15 martop15">
                <div className="flex gap15 fullW">
                    <button className='fullW greenButton pad15 borrad5 ptr martop15' onClick={() => handleSubmit()}> Submit </button>
                    <button className='fullW redButton pad15 borrad5 ptr martop15'> Cancel </button>
                </div>
            </div>
        </>
    )
}
