import { useEffect, useState } from "react";
import axios from "axios";
import { Bell, MagnifyingGlass, Plus } from "@phosphor-icons/react";
import { Modal } from "../../components/ModalComponent/Modal";
import { Sidebar } from "../../components/sidebar";
import { Input } from "../../components/Input/index";
import { Tab } from "../../components/Tab/Tab";
import { Toggle, iconType } from "../../components/Toggle/Toggle";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button/Button";
import style from "../home/app.module.css";
import Rick from "../../assets/images/RickAndMory.png";
import { modalStatus } from "../../components/ModalComponent/Modal";
import { useNavigate } from "react-router-dom";

const tabs = [
  {
    title: "tipo  01",
    key: 0,
  },
  {
    title: "tipo  02",
    key: 1,
  },
  {
    title: "tipo  03",
    key: 2,
  },
];

function Icon() {
  return <Plus size={15} />;
}

export function App() {
  const [currentTab, setCurrentTab] = useState(1);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [layout, setLayout] = useState(iconType.COLUMNS);
  const [modalModel, setModalModel] = useState(modalStatus.CLOSE);
  const [productSelected, setProductSelected] = useState({});
  const navigate = useNavigate();

  function goToRegistration() {
    navigate("/registration");
  }

  function goToEdition() {
    navigate("/edition");
  }

  function onChangeModalStatusClose() {
    setModalModel(modalStatus.CLOSE);
  }

  function onChangeModalStatusOpen(product) {
    setProductSelected(product);
    setModalModel(modalStatus.OPEN);
  }

  function changeLayoutCards() {
    if (layout === iconType.LIST) {
      return style["grid-layout-list"];
    }
    if (modalModel === modalStatus.OPEN) {
      return style["grid-layout-column-open-modal"];
    } else if (modalModel === modalStatus.CLOSE) {
      return style["grid-layout-column-close-modal"];
    }
  }

  function changeLayoutAllScreen() {
    if (layout === iconType.LIST && modalModel === modalStatus.OPEN) {
      return style["main-width-close-modal"];
    }
    if (modalModel === modalStatus.OPEN) {
      return style["main-width-open-modal"];
    } else {
      return style["main-width-close-modal"];
    }
  }

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
    <div className={style["home-page"]}>
      <aside>
        <Sidebar />
      </aside>

      <main className={changeLayoutAllScreen()}>
        <nav className={style["nav"]}>
          <div className={style["content-input"]}>
            <div className={style["input-wrapper"]}>
              <button
                className={style["button-search"]}
                onClick={goToRegistration}
              >
                <MagnifyingGlass size={16} />
              </button>
              <Input
                borderNone={true}
                type="text"
                placeholder="Pesquisar produtos"
                onChange={(event) => {
                  setSearch(event.currentTarget.value);
                }}
              />
            </div>
          </div>
          <div className={style["button-icons"]}>
            <div className={style["div-button"]}>
              <Button
                label={
                  <span className={style["name-button"]}>
                    Adicionar produto
                  </span>
                }
                icon={<Icon className={style["icon-plus"]} />}
                buttonBackgroundOff={"not"}
                className={style["Button"]}
                onClick={goToRegistration}
              />
            </div>

            <div className={style["icon-photo"]}>
              <Bell size={20} className={style["icon-bell"]} />
            </div>

            <div className={style["notification"]}>
              <span className={style["number-notification"]}>13</span>
            </div>

            <div>
              <img
                src={Rick}
                className={style["logo"]}
                alt="imagem Rick e Morty"
              />
            </div>
          </div>
        </nav>

        <section>
          <p className={style["title"]}>ìnicio</p>

          <div className={style["tab-toggle"]}>
            <div>
              <Tab
                tabs={tabs}
                currentTab={currentTab}
                onChange={(layout) => setCurrentTab(layout)}
              />
            </div>

            <div>
              <Toggle onChange={(layout) => setLayout(layout)} />
            </div>
          </div>

          <div className={changeLayoutCards()}>
            {products.map((product) => {
              return (
                <Card
                  key={product.id}
                  product={product}
                  layout={layout}
                  onChangeModalStatusOpen={(product) =>
                    onChangeModalStatusOpen(product)
                  }
                />
              );
            })}
          </div>
        </section>
      </main>

      <section
        className={
          modalModel === modalStatus.CLOSE
            ? style["modal-close"]
            : style["modal-section"]
        }
      >
        <Modal
          name="Yan Cesar"
          onChangeModalStatusClose={onChangeModalStatusClose}
          goToEdition={goToEdition}
          product={productSelected}
        />
      </section>
    </div>
  );
}

export default App;
