"use client"
import PageTitle from '@/app/components/PageTitle'
import React, { useState } from 'react'

export default function page() {

    const [disabled, setDisabled] = useState(false)

    function handleClick() {
        setDisabled(!disabled)
    }

    return (
        <>
            <PageTitle title='Adding a New Product' />

            <div className="gridH2 gap30">
                <div className="flex verti gap15">
                    <span className='em1_25 noSelect'> Product Name </span>
                    <input type="text" className='pad15 borrad5 nobor' style={{"outline": "none"}}/>
                </div>
                <div className="flex verti gap15">
                    <span className='em1_25 noSelect'> Product SKU </span>
                    <input type="text" className='pad15 borrad5 nobor' style={{"outline": "none"}}/>
                </div>
                <div className="flex verti gap15">
                    <span className='em1_25 noSelect'> Product Price </span>
                    <input type="number" className='pad15 borrad5 nobor' style={{"outline": "none"}}/>
                </div>
                <div className="flex verti gap15">
                    <span className='em1_25 noSelect'> Product Stock </span>
                    <input type="number" className='pad15 borrad5 nobor' style={{"outline": "none"}}/>
                </div>
                <div className="flex verti gap15">
                    <span className='em1_25 noSelect'> Product Image </span>
                    <input type="file" className='pad15 borrad5 boxedEl1 ptr' style={{"outline": "none"}}/>
                </div>
                <div className="flex verti gap15">
                    <span className='em1_25 noSelect'> Product Visibility </span>
                    <div className='gap30 borrad5 boxedEl1 pad15 gridH2'>
                        <div className='flex gap10'>
                            <input type="radio" id='listed' name='visibility' value='Listed' aria-selected='true' className='pad10 borrad5'/>
                            <label htmlFor="listed" className='flex fullW ptr'> Listed </label>
                        </div>
                        <div className='flex gap10'>
                            <input type="radio" id='unlisted' name='visibility' value='Unlisted' className='pad10 borrad5'/>
                            <label htmlFor="unlisted" className='flex fullW ptr'> Unlisted </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex verti gap15 martop15">
                <div className="flex verti gap15">
                        <span className='em1_25 noSelect'> Variant </span>
                        <div className="flex gap15">
                            <input type="checkbox" className='pad30' id='is_variant' onClick={handleClick}/>
                            <label htmlFor="is_variant"> Is a variant of another product </label>
                        </div>
                        <select name="product" className='pad15 borrad5' disabled id="prod">
                            <option value="1"> Brush Pack for ProCreate </option>
                        </select>
                </div>

                <div className="flex gap15 fullW">
                    <button className='fullW greenButton pad15 borrad5 ptr martop15'> Submit </button>
                    <button className='fullW redButton pad15 borrad5 ptr martop15'> Cancel </button>
                </div>
            </div>
        </>
    )
}
