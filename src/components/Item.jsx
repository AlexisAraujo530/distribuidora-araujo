import React from "react";
import ItemCount from "./ItemCount";



const Item =({product})=> {
    return (
        <div className="card" >
        <img src={product.img} className="card-img-top" style={{width: 200, height: 200}} alt="{product.name} " />        
        <div>
            <p className="card-text">{product.name} </p>
            <p className="card-text">{product.description} </p>
            
        </div>
        <ItemCount stock={product.stock} />
        </div>
    )
}

export default Item