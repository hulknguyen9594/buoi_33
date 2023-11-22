import React, { Component } from 'react'
import Item from './Item'

export default class List extends Component {
  render() {
    return (
      <div className='row'>
        {this.props.listShoe.map((item)=>{
            return <Item key={item.id} item={item} handleAtc={this.props.handleAtc}
            handleDetail={this.props.handleDetail}/>
        })}
      </div>
    )
  }
}
