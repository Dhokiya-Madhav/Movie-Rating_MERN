import React from 'react'
import { Link } from 'react-router-dom'
import './homecss.css'
export default function Header() {
  
  
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link class="navbar-brand text-white" href="#">Apna Theatre</Link>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link text-white" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-white" to="/about">About Us</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-white" to="/contact">Contact Us</Link>
              </li>
            </ul>
            <form class="d-flex">
              
            </form>
          </div>
        </div>
      </nav>
    )
}
