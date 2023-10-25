import { useEffect, useState } from "react"
import axios from "axios"
import styles from './style.module.css'
import { Button } from "../../components/Button"
import { X } from "@phosphor-icons/react"
import { Card, layoutType } from "../../components/Card"
import { Toggle } from "../../components/Toggle"


function Icon() {
  return <X size={19} color="#FFFFFF" />
}

function App() {
  const [products, setProducts] = useState([])
  const [layout, setLayout] = useState(layoutType.CARD)

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then((response) => {
        setProducts(response.data)
      })
  }, [])

  function changeLayoutCard(layoutToChange) {
    setLayout(layoutToChange)
  }

  return (
    <div>
      <Toggle
        onChange={changeLayoutCard}
      />

      {products.map(product => {
        return (
          <Card key={product.key} name={product.title} layout={layout} />
        )
      })}

      <div className={styles['button']}>
        <Button
          icon={Icon}
        />
      </div>
    </div>
  )
}

export default App
