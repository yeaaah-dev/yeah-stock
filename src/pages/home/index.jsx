import { useEffect, useState } from "react"
import axios from "axios"
import './style.css'
import { Header } from "../header/header"


function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then((response) => {
        setProducts(response.data)
      })
  }, [])

  return (

    <div className="container-home">
      {products.map(product => {
        return <div key={product.key} >
          <span className=""> title: {product.title}</span>
          <span className="">quantify: {product.quantify}</span>
          <span className="">measure in: {product.measurein}</span>
          <span className="">purchase price:  {product.purchasePrice}</span>
          <span className="">sale price:  {product.salePrice}</span>
        </div>
        
      })}
    <Header></Header>
    </div>

  )
}

export default App
