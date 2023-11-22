import React, { Component } from 'react'

export default class Cart extends Component {
  render() {
    let product=this.props.cart
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>  
          {product.map((item)=>{
            return(
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td><img src={item.image} alt="" width={70} /></td>
                      <td>
                        <button className="btn btn-primary" onClick={()=>this.props.handleTang(item)}>+</button>
                        {item.soLuong}
                        <button className="btn btn-primary" onClick={()=>this.props.handleGiam(item)}>-</button>
                        </td>
                      <td>{item.total}$</td>
                      <td><button className="btn btn-danger" onClick={()=>this.props.handleDelete(item)}>Delete</button></td>
                    </tr>
            )
          })}
          <tr>
            <td>Total</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{this.props.tinhTong(product)}</td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
