import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CalendlyLogo from '../Assests/calendly.svg'
const LogIn = () => {

  const [LoginEmail, setLoginEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!LoginEmail) {
      alert('enter your email')
    }


  }
  return (
    <>
      <img src={CalendlyLogo} alt="calendly logo" />
      <div id="container">

        <div id="main">
          <h1>Welcome back to  <span>Calendly</span> </h1>
          <p>
            Log in to your account to get back to your hub for <br /> scheduling meetings.


          </p>
          <form onSubmit={handleSubmit}>
            <input type="email"
              placeholder="Enter your email"
              value={LoginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <button type='submit'>Login</button>
          </form>
          <p>Don't have account ? <a href="./signUp.html" id="signUpLink">Sign Up</a></p>
        </div>
      </div>

    </>
  )
}

export default LogIn
