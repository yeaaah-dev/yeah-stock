import { useEffect, useState } from "react";
import axios from "axios";
import { Modal } from "../../components/ModalComponent/Modal";
import { Tab } from "../../components/Tab/Tab";
import { Input } from "../../components/Input/index";
import { Button } from "../../components/Button/Button"
import { Plus } from "@phosphor-icons/react"
import style from "../home/app.module.css"

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

function Icon() {
  return <Plus size={15} />
}

function App() {
  const [products, setProducts] = useState([]);
  const [currentTab, setCurrentTab] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const query = search.length ? `?title_like=${search}` : "";

    axios.get(`http://localhost:3000/products${query}`).then((response) => {
      setProducts(response.data);
    });
  }, [search]);



  return (
    <div className="container-home">
      <Input
        onChange={(event) => {
          setSearch(event.currentTarget.value);
        }}
      />
      <div className={style['div-Button']}>
        <Button
          label={"Adicionar produto"}
          icon={<Icon />}
          buttonBackgroundOff={'not'}
        />
      </div>
      <div>
        {products.map((product) => {
          return (
            <div key={product.key}>
              <span className=""> title: {product.title}</span>
              <span className="">quantify: {product.quantify}</span>
              <span className="">measure in: {product.measurein}</span>
              <span className="">purchase price: {product.purchasePrice}</span>
              <span className="">sale price: {product.salePrice}</span>
            </div>
          );
        })}

      </div>

      <Tab
        tabs={tabs}
        currentTab={currentTab}
        onChange={(layout) => setCurrentTab(layout)}
      />


      <Modal name="Yan Cesar" />
    </div>
  );
}

export default App;
