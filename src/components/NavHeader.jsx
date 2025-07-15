import React from 'react'

function NavHeader() {
  return (
    <div className="nav-header">
    <div className="navbar">
      <div className="container">
        <div className="d-flex align-items-center">
          <button
            className="btn fs-4"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <i className="fa-solid fa-bars-staggered bar d-sm-none d-flex"></i>
          </button>
          <img src="/img/logo.png" alt="" />
          <h3>AIR</h3>
        </div>
        <ul className="navbar-nav flex-row gap-3 d-lg-flex d-none">
          <li><a href="#!" className="nav-link">Home</a></li>
          <li><a href="#!" className="nav-link">Booking</a></li>
          <li><a href="#!" className="nav-link">Private Jet</a></li>
          <li><a href="#!" className="nav-link">Specification</a></li>
          <li><a href="#!" className="nav-link">Luxury Charters</a></li>
          <li><a href="#!" className="nav-link">membership</a></li>
        </ul>
        <div className="d-flex justify-content-center align-items-center gap-2 d-sm-flex d-none">
          <li className="list-unstyled">Register</li>
          <button className="py-1 px-3 rounded-2 button border-0 text-white">Sign In</button>
        </div>
    
        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <img className="fw-bold mb-0" src="./img/logo.png" alt="" />
            <h3>AIR</h3>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav flex-row gap-3 flex-column">
              <li><a href="#!" className="nav-link">Home</a></li>
              <li><a href="#!" className="nav-link">Booking</a></li>
              <li><a href="#!" className="nav-link">Private Jet</a></li>
              <li><a href="#!" className="nav-link">Specification</a></li>
              <li><a href="#!" className="nav-link">Luxury Charters</a></li>
              <li><a href="#!" className="nav-link">membership</a></li>
            </ul>
            <div className="d-flex justify-content-center align-items-center gap-2 d-sm-flex d-none">
              <li className="list-unstyled">Register</li>
              <button className="py-1 px-3 rounded-2 button border-0">Sign In</button>
            </div>
          </div>
        </div>
       
      </div>
    </div>
   <div className="header">
    <div className="container">
    <div>
        <div className="header-text">
          <h1>Enjoy <span >Reserved </span> <br/>
            Overhead bin space</h1>
            <button className="btn fw-bold">Explore Now</button>
    </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default NavHeader
