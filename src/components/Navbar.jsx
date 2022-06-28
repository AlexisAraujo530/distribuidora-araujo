import React from 'react'
import CartWidget from '../components/CartWidget'


const Navbar = () => {
  // console.log('soy el nav y me monte')
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand text-light" href="#">Disctribuidora Malena</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item dropdown bg-dark">
            <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Productos
            </a>
            <ul className="dropdown-menu bg-dark " aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item text-light" href="#">Categoria 1</a></li>
              <li><a className="dropdown-item text-light" href="#">Categoria 2</a></li>
              <li><a className="dropdown-item text-light" href="#">Categoria 3</a></li>
            </ul>
          </li>
        </ul>
        <CartWidget/>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
