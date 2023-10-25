import { useEffect, useState } from "react"
import axios from "axios"
import styles from '../../components/Card/style.module.css';
import Toggle from '../../components/Toggle/Toggle';
import { Image, NotePencil } from "@phosphor-icons/react";

function App() {
  const [products, setProducts] = useState([])
  const [layout, setLayout] = useState('card')

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then((response) => {
        setProducts(response.data)
      })
  }, [])

  return (
    <div>
      <Toggle
        onChange={(layout) => setLayout(layout)}>
      </Toggle>

      {layout === 'list' ? (
        <div> </div>
      ) : (
        <div> {products.map(product => {
          return (
            <div key={product.key}>
              <div className={styles['container_list_card']}>

                <div className={styles['content_card_list']}>
                  <Image size={30} color="#8A8A8A" />
                  <span>JPG</span>
                </div>

                <div className={styles['all_descriptions']}>

                  <div className={styles['product_name_list_card']}>
                    <span>{product.title}</span>
                  </div>

                  <div className={styles['description_product_list_card']}>
                    <div>
                      Quantily: <span>{product.quantify}</span>
                    </div>
                    <div>
                      Mesure un.: <span>{product.measurein}</span>
                    </div>
                    <div>
                      Purchase price: <span>{product.purchasePrice}</span>
                    </div>
                    <div>
                      Sale Price:  <span>{product.salePrice}</span>
                    </div>
                    <div>
                      Currency: <span>Unity </span>
                    </div>
                    <div>
                      Fornecedor: <span>Hugostoso</span>
                    </div>
                  </div>
                </div>

                <div className={styles['pencil_edit']}>
                  <button><NotePencil size={14} color=" #1F7CFB" /></button>
                </div>
              </div>
            </div>
          )
        })} </div>
      )}

      {layout === 'card' ? (
        <div> </div>
      ) : (
        <div> {products.map(product => {
          return (
            <div key={product.key}>
              <div className={styles['container_card']}>

                <div className={styles['content_card']}>
                  <Image size={40} color="#8A8A8A" />
                  <span>JPG</span>
                </div>

                <div className={styles['product_name']}>
                  <span>{product.title}</span>
                  <button><NotePencil size={14} color=" #1F7CFB" /></button>
                </div>

                <div className={styles['description_product']}>
                  <div>
                    Quantily: <span>{product.quantify}</span>
                  </div>
                  <div>
                    Mesure un.: <span>{product.measurein}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })} </div>
      )}
    </div>
  )
}

export default App
