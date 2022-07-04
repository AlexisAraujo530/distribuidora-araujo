
import React, { useState } from 'react'



   const ItemCount = ({stock}) => {
        const [amount, setAmount] = useState(0)
        const count = (value) => {
            const result = amount + value
           if(result<=stock){
            setAmount(amount+value)
        }
    };



  return (
    <div className='d-flex flex-row align-items-center display-3 justify-content-between'>
    <button className='btn btn-danger p5 fw-bold display-3' onClick={()=>count(-1)}>-</button>
    <span>{amount} </span>
    <button className='btn btn-success p5 fw-bold display-3' onClick={()=>count(+1)}>+</button>
</div>
  )
}



export default ItemCount