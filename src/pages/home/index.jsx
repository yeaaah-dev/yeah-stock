import Input from '../../components/Input/index'
import Tab from '../../components/Tab/Tab'
import Modal from '../../components/ModalComponent/Modal'
import { useEffect, useState } from "react"
import axios from "axios"
import styles from '../../components/Card/style.module.css';
import Toggle from '../../components/Toggle/Toggle';
import { Image, NotePencil } from "@phosphor-icons/react";

const tabs = [
  {
    title: "tipo 1",
    key: 0,
  },
  {
    title: "tipo 2",
    key: 1,
  },
  {
    title: "tipo 3",
    key: 2,
  },
];

function App() {
  const [currentTab, setCurrentTab] = useState(1);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([])
  const [layout, setLayout] = useState('card')


  useEffect(() => {
    const query = search.length ? `?title_like=${search}` : "";

    axios.get(`http://localhost:3000/products${query}`).then((response) => {
      setProducts(response.data);
    });
  }, [search]);

  return (
    <div >
      <Toggle
        onChange={(layout) => setLayout(layout)}>
      </Toggle>

      {layout === 'list' ? (
        <div> </div>
      ) : (
        <div className={styles['container_list_card_column']}> {products.map(product => {
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
        <div className={styles['all_cards_grid']}>
          <div className={styles['container_card_grid']}> {products.map(product => {
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
        </div>
      )
      }
      < div className="container-home" >
        <Input
          onChange={(event) => {
            setSearch(event.currentTarget.value);
          }}
        />
        <Tab
          tabs={tabs}
          currentTab={currentTab}
          onChange={(layout) => setCurrentTab(layout)}
        />
        <Modal name="Yan Cesar" />
      </div >
    </div >
  );
}

export default App;
