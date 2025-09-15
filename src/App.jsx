import { useState } from 'react'
import './App.css'
import Header from './header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="herosection">
      <div className="navBar">
        <Header />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h1>Hero Page</h1>
      </div>
      <p className="read-the-docs">
        This is mildly darker for some reason.
      </p>
    </div>
    </>
  )
}

export default App
