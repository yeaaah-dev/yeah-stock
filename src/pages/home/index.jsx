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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const tabs = [
  {
    title: "Type",
    label: "01",
    key: 0,
  },
  {
    title: "Type",
    label: "02",
    key: 1,
  },
  {
    title: "Type",
    label: "03",
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

  function toastInstance(message) {
    const config = {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "dark",
    };

    function success() {
      toast.success(message, config);
    }

    function error() {
      toast.error(message, config);
    }

    return {
      success,
      error,
    };
  }

  function goToRegistration() {
    navigate("/registration");
  }

  function goToEdition() {
    navigate(`/edition/${productSelected.id}`);
  }

  function onChangeModalStatusClose() {
    setModalModel(modalStatus.CLOSE);
  }

  function onChangeModalStatusOpen(product) {
    setProductSelected(product);
    setModalModel(modalStatus.OPEN);
  }

  function changeLayoutCardsWithModalOpen() {
    if (layout === iconType.COLUMNS && modalModel === modalStatus.CLOSE) {
      return style["products-cards"];
    } else {
      return style["products-lists"];
    }
  }

  function changeSizeAllScreen() {
    if (layout === iconType.COLUMNS && modalModel === modalStatus.OPEN) {
      return style["header-nav-main-conteiner"];
    }
    if (layout === iconType.LIST && modalModel === modalStatus.OPEN) {
      return style["header-nav-main-list-conteiner"];
    }
    if (layout === iconType.COLUMNS && modalModel === modalStatus.CLOSE) {
      return style["header-nav-main-conteiner-close"];
    }
    if (layout === iconType.LIST && modalModel === modalStatus.CLOSE) {
      return style["header-nav-main-list-conteiner-close"];
    }
  }

  async function getProducts() {
    const { error } = toastInstance("The product has not been deleted !");
    try {
      const { data } = await axios.get(`http://localhost:3004/products`);
      setProducts(data);
      setTimeout(() => onChangeModalStatusClose(), 3000);
    } catch (err) {
      error();
    }
  }

  async function deleteProduct() {
    const { success } = toastInstance("Product deleted successfully!");
    const { error } = toastInstance("The product has not been deleted!");

    try {
      await axios.delete(`http://localhost:3004/product/${productSelected.id}`);
      success();
      await getProducts();
    } catch (err) {
      error();
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
      <div className={style["column-sidebar"]}>
        <Sidebar />
      </div>
      <div className={changeSizeAllScreen()}>
        <header className={style["header-button-icon"]}>
          <div className={style["input-search"]}>
            <div className={style["icon"]}>
              <MagnifyingGlass className={style["glass-icon"]} />
            </div>
            <div className={style["input-component"]}>
              <Input
                borderNone={true}
                type="text"
                placeholder="Search products"
                onChange={(event) => {
                  setSearch(event.currentTarget.value);
                }}
              />
            </div>
          </div>
          <div className={style["button-add-icons"]}>
            <div className={style["button-component"]}>
              <Button
                label={
                  <span className={style["name-button"]}>Add product</span>
                }
                icon={<Icon />}
                buttonBackgroundOff={"not"}
                onClick={goToRegistration}
              />
            </div>
            <div className={style["all-item-notification"]}>
              <div className={style["notification"]}>
                <Bell size={30} className={style["icon-bell"]} />
              </div>
              <div className={style["number-notification"]}>
                <span>13</span>
              </div>
            </div>

            <img
              src={Rick}
              className={style["logo"]}
              alt="Rick and Morty image"
            />
          </div>
        </header>
        <div className={style["nav-main-conteiner"]}>
          <div className={style["title-page"]}>
            <h1>Start</h1>
          </div>
          <nav className={style["nav-tab-toggle"]}>
            <div className={style["tab-conteiner"]}>
              <Tab
                tabs={tabs}
                currentTab={currentTab}
                onChange={(layout) => setCurrentTab(layout)}
              />
            </div>
            <div className={style["toggle-conteiner"]}>
              <Toggle onChange={(layout) => setLayout(layout)} />
            </div>
          </nav>
        </div>
        <main>
          <div className={changeLayoutCardsWithModalOpen()}>
            {products.map((product) => {
              return (
                <Card
                  key={product.id}
                  product={product}
                  layout={layout}
                  onChangeModalStatusOpen={(product) =>
                    onChangeModalStatusOpen(product)
                  }
                  modalModel={modalModel}
                />
              );
            })}
          </div>
        </main>
      </div>
      <div
        className={
          modalModel === modalStatus.CLOSE
            ? style["column-modal-close"]
            : style["column-modal"]
        }
      >
        <Modal
          name="Yan Cesar"
          onChangeModalStatusClose={(product) =>
            onChangeModalStatusClose(product)
          }
          goToEdition={goToEdition}
          product={productSelected}
          onDeleteProduct={deleteProduct}
        />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
