import { useState } from 'react'
import './App.css'
import Header from '../header'

function Projects() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
        <p>
          Edit <code>src/projects.jsx</code> and save to test HMR
        </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Projects
