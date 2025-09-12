import { useState } from 'react'
import './Project.css'
import Header from './header'

function Project() {
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
        <h1>Projects Page</h1>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Project
