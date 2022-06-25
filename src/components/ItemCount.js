import React, { useState } from 'react';
import fideos from '../imagenes/fideos.png'


const Card = ({stock,name}) => {
    const [amount, setAmount] = useState(0)
    const count = (value) => {
        const result = amount + value
       if(result<=stock){
        setAmount(amount+value)
    }
};

    return (
        <section className='bg-white border' >
            <h3 className='d-flex py-3 bg-white justify-content-center'>
               {name}
            </h3>
            <div className='d-flex justify-content-center'>
            <img className='d-flex justify-content-center' style={{width: 200, height: 200,}}src={fideos} alt="placeholder" />
            </div>
            <h4 className='d-flex justify-content-center'>Precio: <span className='price'>150</span> </h4>
            <div className='d-flex flex-row align-items-center display-3 justify-content-between'>
                <button className='btn btn-danger p5 fw-bold display-3' onClick={()=>count(-1)}>-</button>
                <span>{amount} / {stock} </span>
                <button className='btn btn-success p5 fw-bold display-3' onClick={()=>count(+1)}>+</button>
            </div>
        </section>
    )
}
export default Card