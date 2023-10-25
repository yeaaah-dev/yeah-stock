import { useEffect, useState } from "react"
import axios from "axios"
import Modal from "../../components/ModalComponent/Modal"
import { Tab } from "../../components/Tab/Tab"

const tabs = [
  {
    title: 'tipo 1',
    key: 0
  },
  {
    title: 'tipo 2',
    key: 1
  },
  {
    title: 'tipo 3',
    key: 2
  }
]

function App() {
  const [products, setProducts] = useState([])
  const [currentTab, setCurrentTab] = useState(1)


  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then((response) => {
        setProducts(response.data)
      })
  }, [])

  return (
    <div className="container-home">

      <div>  {products.map(product => {
        return (
          <div key={product.key} >
            <span className=""> title: {product.title}</span>
            <span className="">quantify: {product.quantify}</span>
            <span className="">measure in: {product.measurein}</span>
            <span className="">purchase price:  {product.purchasePrice}</span>
            <span className="">sale price:  {product.salePrice}</span>
          </div>
        )
      })}
      </div>

      <Tab
        tabs={tabs}
        currentTab={currentTab}
        onChange={(key) => setCurrentTab(key)}
      />

      <Modal
        name="Yan Cesar"
      />
    </div >
  )
}

export default App
