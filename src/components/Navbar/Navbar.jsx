import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5"
import { userContext } from '../../context/useContext';
import "./Navbar.css"

function Navbar() {
  const {state}=useContext(userContext)
  return (
    <nav className="navbar navbar-expand-md ">
      <div className="container-fluid">
        <a 
          className="nav-head fs-2 fw-bold" 
          href="#" 
          
        >
          ShoeZone
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active fs-5 text-dark" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fs-5 text-dark" href="#">Orders</a>
              </li>
              
              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle fs-5 text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Brand
                </a>
                <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/Nike">Nike</Link></li>
                  <li><Link className="dropdown-item" to="/Adidas">Adidas</Link></li>
                  <li><Link className="dropdown-item" to="/Puma">Puma</Link></li>
                  
                
                </ul>
                

                
              </li>
            </ul>
            <div>
            <IoCartOutline style={{ fontSize: '30px', marginRight: '180px' }} />

            
              <button onClick={()=>localStorage.clear('id')} className="btn btn-outline-dark rounded-pill">
                <Link className="text-dark text-decoration-none" to="/login">Login</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
