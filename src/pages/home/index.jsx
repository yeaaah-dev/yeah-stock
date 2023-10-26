import { Sidebar } from "../../components/sidebar"
import { Input } from "../../components/Input/index";
import { Tab } from "../../components/Tab/Tab";
import { Modal } from "../../components/ModalComponent/Modal";
import { useEffect, useState } from "react";
import axios from "axios";
import { Toggle, iconType } from "../../components/Toggle/Toggle";
import { Card } from "../../components/Card";
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
  const [currentTab, setCurrentTab] = useState(1);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [layout, setLayout] = useState(iconType.COLUMNS);

  useEffect(() => {
    const query = search.length ? `?title_like=${search}` : "";

    axios
      .get(`http://localhost:3004/products${query}`, {
        "Cache-Control": "no-cache",
        "Content-Type": "application/x-www-form-urlencoded",
      })
      .then((response) => {
        setProducts(response.data);
      });
  }, [search]);



  return (

    < div>
      <Sidebar></Sidebar>

      <div>
        <Toggle onChange={(layout) => setLayout(layout)}></Toggle>

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
        </div>

        {products.map((product) => {
          return <Card key={product.key} product={product} layout={layout} />;
        })}


        <Tab
          tabs={tabs}
          currentTab={currentTab}
          onChange={(layout) => setCurrentTab(layout)}
        />
        <Modal name="Yan Cesar" />
      </div >
    </div>
  )
}

export default App;
