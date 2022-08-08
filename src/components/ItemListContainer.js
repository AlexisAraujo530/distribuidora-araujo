import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
//import { getProds } from '../mocks/fakeApi'
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import CircularProgress from '@mui/material/CircularProgress';

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();
   
    useEffect(() => {
            const q = categoryId
                ? query(collection(db, 'listaProductos'), where('category', '==', categoryId))
                : collection(db, 'listaProductos'); 
            getDocs(q) 
            .then(result => {
                const lista = result.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data(),
                    };
                }
                );
                setProducts(lista);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            }); 
          }, [categoryId]);
    //console.log(products);

          return (
              <>
                  {loading 
                  
                  ? <CircularProgress color="success"/>
                  : <ItemList products={products} />    
                  }
              </>
          );
      };
      
      export default ItemListContainer;









