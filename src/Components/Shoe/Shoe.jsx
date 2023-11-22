import React, { Component } from 'react'
import Cart from './Cart'
import List from './List'
import { shoeArr } from './data'
import Detail from './Detail'

export default class Shoe extends Component {
state={
  listShoe:shoeArr,
  cart :[],
  detail:shoeArr[0]
}
tinhTong=(cart)=>{
  let m=cart.length
  console.log(m);
  return m
}
handleAtc=(item)=>{

  let cloneCart=[...this.state.cart]
  let index=cloneCart.findIndex((items)=>{
    return(
      item.id==items.id
    )
  })
  if(index==-1){
    let newitem={...item,soLuong:1,total:item.price}
    cloneCart.push(newitem)
  }
  else{
    cloneCart[index].soLuong++
    cloneCart[index].total+=item.price

  }
  this.setState({
    cart:cloneCart
  })
}
handleDelete=(item)=>{
  let cloneCart=[...this.state.cart]
  let index = cloneCart.findIndex((items)=>{
    return item.id==items.id
  })
  cloneCart.splice(index,1)
  this.setState({
    cart:cloneCart
  })
}
handleTang=(item)=>{
  let cloneCart=[...this.state.cart]
  let index = cloneCart.findIndex((items)=>{
    return item.id==items.id
  })
  cloneCart[index].soLuong++
  this.setState({
    cart:cloneCart
  })
}
handleGiam=(item)=>{
  let cloneCart=[...this.state.cart]
  let index = cloneCart.findIndex((items)=>{
    return item.id==items.id
  })
if( item.soLuong==1){this.handleDelete(item)}
  else{
    cloneCart[index].soLuong--
    this.setState({
      cart:cloneCart
    })
  }
}
handleDetail=(item)=>{
  this.setState({
    detail:item
  })
}
  render() {
    return (
      <div className='row'>
        <div className='col-6'>
        <Cart cart ={this.state.cart} 
        tinhTong={this.tinhTong}
        handleDelete={this.handleDelete}
        handleTang={this.handleTang} handleGiam={this.handleGiam}/>
        <Detail detail={this.state.detail}
        handleAtc={this.handleAtc}/>
        </div>
        <div className='col-6'>
        <List listShoe={this.state.listShoe} handleAtc={this.handleAtc}
        handleDetail={this.handleDetail}/>
        </div>
      </div>
    )
  }
}
