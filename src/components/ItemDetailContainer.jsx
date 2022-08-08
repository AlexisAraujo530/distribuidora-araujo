import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from "../firebase/firebase"
import { doc, getDoc, collection } from "firebase/firestore"

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(true)

    const { id } = useParams();

    useEffect(() => {
        const productsCollection = collection(db, 'listaProductos');
        const refDoc = doc(productsCollection, id)
        getDoc(refDoc).then(result => {
            setProduct({ ...result.data(), id: result.id })    
        })
        .catch(err => console.log(err))
        .finally(() => setLoaded(false))
    }, [id]);
    //console.log(product)
    return (
        <>
            {loaded 
            ? <CircularProgress color="success" /> 
            : <ItemDetail product={product} />}
        </>
    )
}


export default ItemDetailContainer
