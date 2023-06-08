import React from 'react'
import discounts from "../../assets/jsons/discounts.json"
import { HiMagnifyingGlass } from 'react-icons/hi2'

export const FilterSales = () => {
  return (
    <div className='filter_sale'>
        <input></input>
        <select name='discount'>
         <HiMagnifyingGlass />   
            <option value="">Select Value</option>
            {discounts.map(discount =>{
                return <option value={discount.value}>{discount.name}</option>
            })}
        </select>
        <button>Search</button>
    </div>
  )
}
