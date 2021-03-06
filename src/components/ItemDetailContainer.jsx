import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProd } from '../mocks/fakeApi'
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        /* const URL = `https://fakestoreapi.com/products/${id}`;
        fetch(URL)
            .then((res) => res.json())
            .then((json) => setProduct(json))
            .finally(() => {
                setLoading(false);
            }); */

        getProd(id)
            .then((res) => {
                setProduct(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    //console.log(product);
    return (
        <div className='asd'>
            {loading ? (
                <h2>Cargando...</h2>
            ) : (
                <>
                    <ItemDetail product={product} />
                </>
            )}
        </div>
    );
};

export default ItemDetailContainer;
/*import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProd } from '../mocks/fakeApi'
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
      setLoading(true);
      getProd(id)
      .then((res) => {
          setProduct(res);
      })
      .catch((error) => {
          console.log(error);
      })
      .finally(() => {
          setLoading(false);
      }); 
    }, [id]);

    console.log(product);
    return (
        <div>
            {loading ? (
                <h2>Cargando...</h2>
            ) : (
                <>
                    <ItemDetail product={product} />
                </>
            )}
        </div>
    );
};

export default ItemDetailContainer;

*/
