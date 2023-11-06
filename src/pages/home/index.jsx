import { useEffect, useState } from "react";
import axios from "axios";
import { Bell, Plus } from "@phosphor-icons/react";
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

function App() {
  const [currentTab, setCurrentTab] = useState(1);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [layout, setLayout] = useState(iconType.COLUMNS);
  const [modalModel, setModalModel] = useState(modalStatus.CLOSE);

  function onChangeModalStatusClose() {
    setModalModel(modalStatus.CLOSE);
  }

  function onChangeModalStatusOpen() {
    setModalModel(modalStatus.OPEN);
  }

  function changeLayout() {
    if (layout === iconType.LIST) {
      return style["grid-layout-list"];
    }
    if (modalModel === modalStatus.OPEN) {
      return style["grid-layout-column-open-modal"];
    } else if (modalModel === modalStatus.CLOSE) {
      return style["grid-layout-column-close-modal"];
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

      <main
        className={
          modalModel === modalStatus.OPEN
            ? style["main-width-open-modal"]
            : style["main-width-close-modal"]
        }
      >
        <nav className={style["nav-bar"]}>
          <Input
            onChange={(event) => {
              setSearch(event.currentTarget.value);
            }}
          />
          <div className={style["button-icons"]}>
            <Button
              label={"Adicionar produto"}
              icon={<Icon />}
              buttonBackgroundOff={"not"}
              className={style["Button"]}
            />

            <div className={style["icon-photo"]}>
              <Bell size={20} className={style["icon-bell"]} />
            </div>

            <img src={Rick} className={style["logo"]} />
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

          <div className={changeLayout()}>
            {products.map((product) => {
              return (
                <Card
                  key={product.key}
                  product={product}
                  layout={layout}
                  onChangeModalStatusOpen={onChangeModalStatusOpen}
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
        />
      </section>
    </div>
  );
}

export default App;
