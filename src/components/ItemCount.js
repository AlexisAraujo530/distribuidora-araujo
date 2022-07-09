import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({ initial, stock }) => {
  const [count, setCount] = useState(initial);

  const add = () => {
      stock !== count && setCount(count + 1);
  };

  const substract = () => {
      initial !== count && setCount(count - 1);
  };

  const onAdd = () => {
    return add();
  }

  return (
          <div className="count">
          <div className="buttons">
              <button className='btn-danger' onClick={substract}>-</button>
              <p>{count}</p>
              <button className='btn-success' onClick={add}>+</button>
            </div>
            <div className="add-cart">
                <Link  to={`/cart`}>
                <button className='btn-success' onAdd={onAdd}>Agregar al Pedido!</button>
                </Link>
          </div>
          </div>
  );
};

export default ItemCount;



