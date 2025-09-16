import { useState } from 'react'
import './Contact.css'
import Header from './header'

function Contact() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="navBar">
        <Header />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h1>Contact me</h1>
      </div>
    </>
  )
}

export default Contact
