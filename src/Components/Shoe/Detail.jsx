import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    let product=this.props.detail
    return (
        <div>
          <h2 className='text-center'>DETAIL PRODUCT</h2>
          <div className='row'>
              <div className='col-4'>
                  <img src={product.image} alt="" className='w-100' />
              </div>
              <div className='col-8'>
                  <div>ID product: {product.id}</div>
                  <div>Name: {product.name}</div>
                  <div>Price: {product.price}$</div>
                  <div>Description: {product.description}</div>
                  <div>Stock: {product.quantity}</div>
                  <button className="btn btn-danger my-3" onClick={()=>this.props.handleAtc(product)}>Add to cart</button>
              </div>
          </div>
          
        </div>
      )
    
  }
}
