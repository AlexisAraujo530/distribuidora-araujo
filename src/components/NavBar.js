import React from 'react';
import Shopping from '../components/CartWidget';
import fondo from '../components/components.css';
import ItemList from '../components/ItemListContainer';





const NavBar = (props) => {
  
    return(
        <header class= "fondo">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">Distribuidora Malena</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
          <a class="nav-link" href="#">Productos</a>
           </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Arma tu pedido</a>
          </li>
          <li class="nav-item">
        <a class="nav-link" href="#">Contacto</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Nuestra Ubicacion</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar Producto</button>
    </form>
  </div>
</nav>
<Shopping />
<ItemList />

</header>
    );
    
  }




export default NavBar;

