import { useState } from "react";
import axios from "axios";
import { CaretDown, CaretUp, Image } from "@phosphor-icons/react";
import { v4 as uuidv4 } from "uuid";
import { validateFields } from "../../utils";

import styles from "../../pages/registrationScreen/RegistrationScreen.module.css";
import { Sidebar } from "../../components/sidebar";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button/Button";
import { Trash } from "@phosphor-icons/react/dist/ssr";
import { Textarea } from "../../components/textarea/textarea";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function RegistrationScreen() {
  const [nameProduct, setNameProduct] = useState("");
  const [quantify, setQuantify] = useState(0);
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [salePrice, setSalePrice] = useState(0);
  const [mensureUnity, setMensureUnity] = useState(0);
  const [currency, setCurrency] = useState(0);
  const [supllier, setSupplier] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);

  function notifySuccess() {
    toast.success("Produto criado com sucesso!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })
  }

  function removeValidation() {
    if (!errors.length) return;

    const values = {
      title: nameProduct,
      quantify: quantify,
      measurein: mensureUnity,
      purchasePrice: purchasePrice,
      salePrice: salePrice,
      supllier: supllier,
      description,
      currency,
    };

    const validate = validateFields(values);

    setErrors(validate);
  }

  async function addProduct() {
    const values = {
      title: nameProduct,
      quantify: quantify,
      measurein: mensureUnity,
      purchasePrice: purchasePrice,
      salePrice: salePrice,
      supllier: supllier,
      description,
      currency,
      key: 10,
      id: uuidv4(),
    };

    const validate = validateFields(values);

    if (validate.length) {
      setErrors(validate);
      return;
    }

    try {
      await axios.post(`http://localhost:3004/products`, values);
      notifySuccess();
    } catch (error) {
      console.log(error);
      alert("Não foi possível registrar seu produto :(");
    }
  }

  const preventMinus = (e) => {
    if (e.code === "Minus") {
      e.preventDefault();
    }
  };

  return (
    <div className={styles["registration-container"]}>
      <Sidebar />
      <div className={styles["layout-registration"]}>
        <div className={styles["title-button"]}>
          <h1 className={styles["title-page"]}>Produto</h1>
          <div className={styles["container-button-delete"]}>
            <Button
              label="Excluir"
              icon={<Trash size={20}></Trash>}
              buttonBackgroundOff="yes"
            />
          </div>
        </div>
        <div className={styles["container-inputs-image"]}>
          <div className={styles["image-product"]}>
            <Image size={26} color="#8A8A8A" />
            <span className={styles["jpg-image"]}>JPG</span>
          </div>
          <div className={styles["content-input-registration"]}>
            <div className={styles["input-products"]}>
              <Input
                type="text"
                name="Nome do produto"
                label="Nome do produto"
                error={errors.includes("title")}
                onBlur={removeValidation}
                onChange={(event) => {
                  setNameProduct(event.target.value);
                }}
              />
            </div>
            <div className={styles["inputs-description-quanty-mensure"]}>
              <div className={styles["input-quanty-mensure"]}>
                <div className={styles["wrapper"]}>
                  <div className={styles["icon"]}>
                    <CaretUp
                      onClick={() => setQuantify(quantify + 1)}
                      className={styles["icon-caret-up"]}
                      size={12}
                    ></CaretUp>
                    <div className={styles["line"]}></div>
                    <CaretDown
                      size={12}
                      className={styles["icon-caret-down"]}
                      onClick={() => setQuantify(quantify - 1)}
                    ></CaretDown>
                  </div>
                  <div className={styles["input-amount-products"]}>
                    <Input
                      type="number"
                      min="0"
                      label="quantify"
                      name="quantify"
                      error={errors.includes("quantify")}
                      onKeyPress={preventMinus}
                      className={styles["input"]}
                      value={quantify}
                      onBlur={removeValidation}
                      onChange={(event) => {
                        setQuantify(event.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className={styles["input-quanty-mensure"]}>
                <div className={styles["wrapper"]}>
                  <div className={styles["icon"]}>
                    <CaretUp
                      onClick={() => setMensureUnity(mensureUnity + 1)}
                      className={styles["icon-caret-up"]}
                      size={12}
                    ></CaretUp>
                    <div className={styles["line"]}></div>
                    <CaretDown
                      size={12}
                      className={styles["icon-caret-down"]}
                      onClick={() => setMensureUnity(mensureUnity - 1)}
                    ></CaretDown>
                  </div>
                  <div className={styles["input-amount-products"]}>
                    <Input
                      type="number"
                      label="Measure"
                      name="measure"
                      className={styles["input"]}
                      value={mensureUnity}
                      error={errors.includes("measurein")}
                      onBlur={removeValidation}
                      onChange={(event) => {
                        setMensureUnity(event.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles["inputs-purchase-price-currency-supplier"]}>
          <div className={styles["inputs-Purchase-price-currency"]}>
            <div className={styles["wrapper"]}>
              <div className={styles["icon-sale-purchase-currency"]}>
                <CaretUp
                  onClick={() => setPurchasePrice(purchasePrice + 1)}
                  className={styles["icon-caret-up"]}
                  size={12}
                ></CaretUp>
                <div className={styles["line"]}></div>
                <CaretDown
                  size={12}
                  className={styles["icon-caret-down"]}
                  onClick={() => setPurchasePrice(purchasePrice - 1)}
                ></CaretDown>
              </div>
              <div className={styles["input-amount-products"]}>
                <Input
                  type="number"
                  label="purchase"
                  name="purchase"
                  error={errors.includes("purchasePrice")}
                  value={purchasePrice}
                  onChange={(event) => {
                    setPurchasePrice(event.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className={styles["inputs-Purchase-price-currency"]}>
            <div className={styles["wrapper"]}>
              <div className={styles["icon-sale-purchase-currency"]}>
                <CaretUp
                  onClick={() => setSalePrice(salePrice + 1)}
                  className={styles["icon-caret-up"]}
                  size={12}
                ></CaretUp>
                <div className={styles["line"]}></div>
                <CaretDown
                  size={12}
                  className={styles["icon-caret-down"]}
                  onClick={() => setSalePrice(salePrice - 1)}
                ></CaretDown>
              </div>
              <div className={styles["input-amount-products"]}>
                <Input
                  type="number"
                  label="sale price"
                  name="sale price"
                  error={errors.includes("salePrice")}
                  className={styles["input"]}
                  value={salePrice}
                  onBlur={removeValidation}
                  onChange={(event) => {
                    setSalePrice(event.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className={styles["inputs-Purchase-price-currency"]}>
            <div className={styles["wrapper"]}>
              <div className={styles["icon-sale-purchase-currency"]}>
                <CaretUp
                  onClick={() => setCurrency(currency + 1)}
                  className={styles["icon-caret-up"]}
                  size={12}
                ></CaretUp>
                <div className={styles["line"]}></div>
                <CaretDown
                  size={12}
                  className={styles["icon-caret-down"]}
                  onClick={() => setCurrency(currency - 1)}
                ></CaretDown>
              </div>
              <div className={styles["input-amount-products"]}>
                <Input
                  type="number"
                  label="currency"
                  name="currency"
                  className={styles["input"]}
                  value={currency}
                  error={errors.includes("currency")}
                  onBlur={removeValidation}
                  onChange={(event) => {
                    setCurrency(event.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className={styles["inputs-description-supplier"]}>
            <div className={styles["input-products-supplier"]}>
              <Input
                type="text"
                name="fornecedor"
                label="fornecedor"
                error={errors.includes("supllier")}
                onBlur={removeValidation}
                onChange={(event) => {
                  setSupplier(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <div className={styles["description-products-content"]}>
          <span className={styles["title-inputs"]}>Descrição do produto</span>
          <Textarea
            name="description"
            error={errors.includes("description")}
            onBlur={removeValidation}
            onChange={(e) => {
              setDescription(e.currentTarget.value);
            }}
          />
        </div>
        <ToastContainer position="top-right" />
        <div className={styles["container-button-submit"]}>
          <Button label="Salvar" onClick={addProduct} type="submit" />
        </div>
      </div>
    </div>
  );
}
