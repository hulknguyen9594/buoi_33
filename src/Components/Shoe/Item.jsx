import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    let shoe=this.props.item
    return (
      <div className='col-3 text-center'>
        <img src={shoe.image} alt="" className='w-100' />
        <h2>{shoe.name}</h2>
        <p>{shoe.price}$</p>
        <button className="btn btn-success m-2" onClick={()=>this.props.handleDetail(shoe)}>View details</button>
        <button className="btn btn-danger m-2 " onClick={()=>this.props.handleAtc(shoe)}>Add to cart</button>
      </div>
    )
  }
}
