import { useState } from 'react'
import './App.css'
import Test from './Test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Softuni React Cource</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Test />
    </>
  )
}

export default App
