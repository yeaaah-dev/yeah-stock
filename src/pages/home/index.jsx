import axios from "axios";
import { Bell, Plus } from "@phosphor-icons/react";

import { Sidebar } from "../../components/sidebar";
import { Input } from "../../components/Input/index";
import { Tab } from "../../components/Tab/Tab";
import { useEffect, useState } from "react";
import { Toggle, iconType } from "../../components/Toggle/Toggle";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button/Button";
import style from "../home/app.module.css";
import Rick from "../../assets/images/RickAndMory.png";

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

      <main>
        <nav className={style["nav-bar"]}>
          <div>
            <Input
              onChange={(event) => {
                setSearch(event.currentTarget.value);
              }}
            />
          </div>

          <div className={style["div-Button"]}>
            <Button
              label={"Adicionar produto"}
              icon={<Icon />}
              buttonBackgroundOff={"not"}
            />
          </div>

          <div className={style["icon-photo"]}>
            <Bell size={20} className={style["icon-bell"]} />
          </div>
          <div>
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
          <div
            className={
              layout === iconType.COLUMNS
                ? style["grid-layout-column"]
                : style["grid-layout-list"]
            }
          >
            {products.map((product) => {
              return (
                <Card key={product.key} product={product} layout={layout} />
              );
            })}
          </div>
        </section>
      </main>

      <section>
        <div>{/* <Modal name="Yan Cesar" /> */}</div>
      </section>
    </div>
  );
}

export default App;
