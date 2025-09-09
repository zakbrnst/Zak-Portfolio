import { useState } from 'react'
import './App.css'

function Projects() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Zak's Portfolio</h1>
      </header>
      <div>
        <a href="/">
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
