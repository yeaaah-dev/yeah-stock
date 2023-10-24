import { useEffect, useState } from "react"
import axios from "axios"
import styles from '../../components/Card/style.module.css';
import PencilEdit from '../../assets/images/pencilEdit.svg'
import Icon_image from '../../assets/images/icon_image.svg'
import ButtonToggle from "../../components/func";

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then((response) => {
        setProducts(response.data)
      })
  }, [])

  return (
    <div>
      <div>
        <ButtonToggle />
      </div>
      {
        products.map(product => {
          return (
            <>
              <div className={styles['container_card']}>

                <div className={styles['content_card']}>
                  <img src={Icon_image} alt="Imagem do produto" />
                  <span>JPG</span>
                </div>

                <div className={styles['product_name']}>
                  <span>{product.title}</span>
                  <button><img src={PencilEdit} alt="Editar" /></button>
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
            </>
          )
        })
      }
    </div>
  )
}

export default App
