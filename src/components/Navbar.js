import React from 'react'
import CalendlyLogo from '../Assests/calendly.svg'
import { Link } from 'react-router-dom'
export default function Navbar() {

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <img src={CalendlyLogo} alt="calendly logo" />
          <a href="">Individuals</a>
          <a href="">Team</a>
          <a href="">Enterprise</a>
          <a href="">Product</a>
          <a href="">Pricing</a>
          <a href="">Resources</a>

          <Link to={'/LogIn'}>
            <button className="btn btn-outline-success">Log In</button>
          </Link>


        </div>
      </nav>
    </>

  )
}
