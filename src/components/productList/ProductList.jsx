import React from 'react'
import './ProductList.css'
import Product from '../product/Product'
import {projects} from '../../data'

const ProductList = () => {
  return (
    <div className='pl'>
        <div className="pl-text">
            <h1 className="pl-title">Sample Github Projects</h1>
        </div>
    <div className="pl-list">
        {projects.map(item => (
          <Product key={item.id} img={item.img} link={item.link}/>
        ))
          }
    </div>
    </div>
  )
}

export default ProductList