import React, { useEffect, useState } from 'react'
import ItemList from '../components/ItemList'
import { getData } from '../mocks/fakeApi'

const ItemListContainer = ({greeting}) => {
  const [productList, setProductList]=useState([])
  const [loading, setLoading]=useState(true)

   
    const getProducts = async () => {
      try{
        const respuesta = await getData
        setProductList(respuesta)
      }catch(error){
        console.log(error)
      }finally{
        setLoading(false)
      }
    }

    useEffect(()=>{
      getProducts()
    },[])
  
  return (
    <div>
      <h1>{greeting}</h1>
      {loading ? <h1>Cargando Productos...</h1> : <ItemList productList={productList}/> },
      
      
    </div>
  )
}

export default ItemListContainer