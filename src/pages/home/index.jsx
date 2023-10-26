import { useEffect, useState } from "react"
import axios from "axios"
import './style.css'
import { Sidebar } from "../../components/sidebar"


function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then((response) => {
        setProducts(response.data)
      })
  }, [])

  return (
   < div>
    <Sidebar></Sidebar>
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
    </div>
    </div>
  )
}

export default App
