import { useEffect, useState } from 'react'


import './App.css'
import axios from 'axios'

function App() {

  const [users, setUsers] = useState(null)

  const fetchApi = async () => {

    try {
      const response = await axios.get('http://127.0.0.1:8000/')
      console.log(response)
      setUsers(response.data.message)
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
       

       
     

        
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {fetchApi()}}>
        </button>
        <p>
          <code>{users}</code>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
