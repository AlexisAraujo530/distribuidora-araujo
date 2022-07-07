import React, { useState } from 'react';

const ItemCount = ({ initial, stock }) => {
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
              <button className='btn-success'>Add to Cart!</button>
          </div>
          </div>
  );
};

export default ItemCount;



