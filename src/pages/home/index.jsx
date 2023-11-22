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
// import { modalStatus } from "../../components/ModalComponent/Modal";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const tabs = [
  {
    title: "type  01",
    key: 0,
  },
  {
    title: "type  02",
    key: 1,
  },
  {
    title: "type  03",
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
  // const [modalModel, setModalModel] = useState(modalStatus.CLOSE);
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
    navigate("/edition");
  }

  function onChangeModalStatusClose() {
    // setModalModel(modalStatus.CLOSE);
  }

  function onChangeModalStatusOpen(product) {
    setProductSelected(product);
    // setModalModel(modalStatus.OPEN);
  }

  // function changeLayoutCards() {
  //   //   if (layout === iconType.LIST && modalModel === modalStatus.CLOSE) {
  //   //     return style["grid-layout-list-close-modal"];
  //   //   } else if (layout === iconType.LIST && modalModel === modalStatus.OPEN) {
  //   //     return style["grid-layout-list-open-modal"];
  //   //   }
  //   //   if (modalModel === modalStatus.OPEN && layout === iconType.COLUMNS) {
  //   //     return style["grid-layout-column-open-modal"];
  //   //   } else if (modalModel === modalStatus.CLOSE) {
  //   //     return style["grid-layout-column-close-modal"];
  //   //   }
  // }

  // function changeLayoutAllScreen() {
  //   // if (layout === iconType.LIST && modalModel === modalStatus.OPEN) {
  //   //   return style["main-width-close-modal"];
  //   // }
  //   // if (modalModel === modalStatus.OPEN) {
  //   //   return style["main-width-open-modal"];
  //   // } else {
  //   //   return style["main-width-close-modal"];
  //   // }
  // }

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
    <>
      <Sidebar />

      <button className={style["button-search"]} onClick={goToRegistration}>
        <MagnifyingGlass size={16} />
      </button>
      <Input
        borderNone={true}
        type="text"
        placeholder="Search products"
        onChange={(event) => {
          setSearch(event.currentTarget.value);
        }}
      />

      <Button
        label={<span className={style["name-button"]}>Add product</span>}
        icon={<Icon className={style["icon-plus"]} />}
        buttonBackgroundOff={"not"}
        className={style["Button"]}
        onClick={goToRegistration}
      />

      <Bell size={20} className={style["icon-bell"]} />
      <span className={style["number-notification"]}>13</span>
      <img src={Rick} className={style["logo"]} alt="Rick and Morty image" />

      <p className={style["title"]}>Start</p>
      <Tab
        tabs={tabs}
        currentTab={currentTab}
        onChange={(layout) => setCurrentTab(layout)}
      />
      <Toggle onChange={(layout) => setLayout(layout)} />
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
      <Modal
        name="Yan Cesar"
        onChangeModalStatusClose={onChangeModalStatusClose}
        goToEdition={goToEdition}
        product={productSelected}
        onDeleteProduct={deleteProduct}
      />
      <ToastContainer />
    </>
  );
}

export default App;
