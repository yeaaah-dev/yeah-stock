import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../../components/ModalComponent/Modal";
import { Tab } from "../../components/Tab/Tab";
import { Header } from "../../components/header/header";
import { Input } from "../../components/Input";

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

      <Modal name="Yan Cesar" />
    </div>
  );
}

export default App;
