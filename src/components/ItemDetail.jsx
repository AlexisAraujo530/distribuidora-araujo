import React from "react";
import './components.css';



export const ItemDetail = ({ data } ) => {
  return (
    <div className="container">
      <div className="detail">
        <img className="img_product" key={data.id} src={data.img} alt=""  />
        <div className="content">
        <h1>{data.name}</h1>
        <br />
        <h2>{data.description}</h2>
        <br />
        <h2>{data.precio}</h2>
        <br />
        <br />
        <button> Agregar al Carrito</button>
        </div>
      </div>
    </div>
  );
}
export default ItemDetail;


//style={{width: 600, height: 600,}}