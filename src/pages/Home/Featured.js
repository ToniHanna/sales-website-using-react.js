import React from "react"
import featuredArray from './data/featured_data'
import FeaturedProduct from './products/FeaturedProduct'
export default function Featured() {
    const featuredList = featuredArray.map((product,index)=>
    <FeaturedProduct 
        key={index}
        product={product}
    />
    )
    return(
        <div className='Featured'>
            <h1>Featured products</h1>
            <div className="featured--list">{featuredList}</div>
        </div>
    )
}