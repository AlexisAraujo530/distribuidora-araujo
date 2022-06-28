import React from 'react'
import Item from './Item'

const ItemList = ({productList, stock}) => {
    // const {productList}=props
  return (
    <div>
        <h3>Lista de Productos</h3>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap'}}>
        {productList.map((product)=><Item  key={product.id} product={product}/>)}
        </div>
    </div>
  )
}

export default ItemList