import { useState } from 'react'
import './App.css'
import Header from './header'

function Projects() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <Header />
      </header>
      <div>
        <a href="/Zak-Portfolio">
          <h3>Link Here</h3>
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/projects.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Projects
