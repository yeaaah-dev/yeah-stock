import { useEffect } from "react"
import axios from "axios"
import './style.css'

function App() {
  useEffect(() => {
    axios.get('http://localhost:3000/products').then((response) => {
      console.log(response)
    })
  }, [])

  return (
    <div className="container-home">Yan Gostoso</div>
  )
}

export default App
