import React from 'react';
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
          <>
              <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link mx-3 active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-3" href="#">About</a>
        </li>
        <li class="nav-item">
        <Link style={{textDecoration:'none'}} to='/appointment'><a  class="nav-link mx-3 text-white" href="#">Appointment</a></Link>
          
        </li>
        <li class="nav-item">
          <a class="nav-link mx-3 text-white" href="#">Blogs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-3 text-white" href="#">Reviews</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-3 text-white" href="#">Contact us</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
          
          </>  
    );
};

export default Navbar;