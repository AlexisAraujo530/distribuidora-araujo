
import ItemDetail from "./ItemDetail";
import React, { useEffect, useState } from 'react';
//import { getData } from '../mocks/fakeApi'

const produc= {id:1, name:"Fideo Bambino", description:"Fideos secos x500gr",precio:"$70 unidad", img:'/Imagen/fideos.png', stock:10}

export const ItemDetailContainer = () => {
    const [data, setData]=useState({});

    useEffect(()=>{
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(produc);
            }, 3000);
        });
        getData.then(res=> setData(res));
      }, [])

    return (
      <ItemDetail data={data} />   
    );
}
export default ItemDetailContainer;