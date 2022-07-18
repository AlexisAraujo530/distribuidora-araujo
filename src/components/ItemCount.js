import React, { useState } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial);

    const add = () => {
        stock !== count && setCount(count + 1);
    };

    const substract = () => {
        initial !== count && setCount(count - 1);
    };
    return (
        <div className="count">
            <div className="buttons">
                <button className='btn-success' onClick={add}>+</button>
                <p>{count}</p>
                <button className='btn-danger' onClick={substract}>-</button>
            </div>
            <div className="add-cart">
                <button className='btn-success' onClick={() => onAdd(count)}>Agregar al Carrito!</button>
            </div>
        </div>
    );
};

export default ItemCount;
/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../CartContext';



const ItemCount = ({ initial, stock, product }) => {
  const [count, setCount] = useState(initial);
  const {addProduct} = useCartContext();

  const add = () => {
      stock !== count && setCount(count + 1);
  };

  const substract = () => {
      initial !== count && setCount(count - 1);
  };
//  const onAdd = (product, quantity) => {
    
    //addProduct(product, quantity);
//}

  return (
          <div className="count">
          <div className="buttons">
              <button className='btn-danger' onClick={substract}>-</button>
              <p>{count}</p>
              <button className='btn-success' onClick={add}>+</button>
                <div className="add-cart">
                <Link to="/cart">
                <button className='btn-success' onClick={addProduct}>Agregar al Pedido!</button> 
                </Link>
                </div>
            </div>
          </div>
  );
};

export default ItemCount;



/*<button className='btn-success' onAdd={onAdd}>Agregar al Pedido!</button>



*/