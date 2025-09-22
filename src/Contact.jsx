import { useState } from 'react'
import './Contact.css'
import Header from './header'

function Contact() {

  return (
    <>
      <div className="navBar">
        <Header />
      </div>
        <h1>Contact me</h1>
        <div className="cardContainer">
          <div className="contactCard">
            <h2>Email</h2>
          </div>
        </div>
    </>
  )
}

export default Contact
