import React, {useState} from 'react';
import ItemCount from './ItemCount';
import { useCartContext } from '../CartContext';
import { Link } from 'react-router-dom';



const ItemDetail = ({ product }) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(product, quantity);
    }

  return (
    <div className='container'>
      <div className="detail">
          <img src={product.image} alt={product.title} width="400" />
          <div>
              <h1>{product.title}</h1>
              <h2>{product.description}</h2>
              <h3>$ {product.price}</h3>
              <h4>Stock: {product.stock}</h4>
            { 
                goToCart
                ? <Link to={"/cart"}>Ir al carrito</Link>
                : <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
            }  
             
          </div>
      </div>
    </div>
  );
};

export default ItemDetail;

