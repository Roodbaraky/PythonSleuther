import { useEffect, useState } from 'react'


import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const fetchApi = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/users')
      console.log(response.data.users)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchApi()
  }, [])
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          
        </a>
        <a href="https://react.dev" target="_blank">
         
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
