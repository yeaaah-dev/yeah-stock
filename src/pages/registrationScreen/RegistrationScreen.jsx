import { useState } from "react";
import axios from "axios";
import { CaretDown, CaretUp, Image } from "@phosphor-icons/react";
import { v4 as uuidv4 } from "uuid";

import styles from "../../pages/registrationScreen/RegistrationScreen.module.css";
import { Sidebar } from "../../components/sidebar";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/textarea/textarea";
import { Button } from "../../components/Button/Button";
import { validateFields } from "../../utils";

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
        <h1 className={styles["title-page"]}>Produto</h1>

        <div className={styles["container-inputs-image"]}>
          <div className={styles["image-product"]}>
            <Image size={26} color="#8A8A8A" />
            <span className={styles["jpg-image"]}>JPG</span>
          </div>
          <div className={styles["content-input-registration"]}>
            <div className={styles["input-name-products"]}>
              <span className={styles["title-inputs"]}>Nome do prooduto</span>
              <Input
                type="text"
                name="name"
                error={errors.includes("title")}
                onBlur={removeValidation}
                onChange={(event) => {
                  setNameProduct(event.target.value);
                }}
              />
            </div>
            <div className={styles["inputs-description-quanty-mensure"]}>
              <div className={styles["input-quanty-mensure"]}>
                <span className={styles["title-inputs"]}>Quanty</span>
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
                  <Input
                    type="number"
                    min="0"
                    name="quantity"
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
              <div className={styles["input-quanty-mensure"]}>
                <span className={styles["title-inputs"]}>Mensure_unity</span>
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
                  <Input
                    type="number"
                    name="Measure"
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

        <div className={styles["inputs-purchase-price-currency-supplier"]}>
          <div className={styles["inputs-Purchase-price-currency"]}>
            <span className={styles["title-inputs"]}>Purchase price</span>
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
              <Input
                type="number"
                className={styles["input"]}
                name="purchase"
                error={errors.includes("purchasePrice")}
                value={purchasePrice}
                onChange={(event) => {
                  setPurchasePrice(event.target.value);
                }}
              />
            </div>
          </div>
          <div className={styles["inputs-Purchase-price-currency"]}>
            <span className={styles["title-inputs"]}>Sale price</span>
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
              <Input
                type="number"
                name="Sale"
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
          <div className={styles["inputs-Purchase-price-currency"]}>
            <span className={styles["title-inputs"]}>Currency</span>
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
              <Input
                type="number"
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
          <div className={styles["inputs-description-supplier"]}>
            <span className={styles["title-inputs"]}>Fornecedor</span>
            <Input
              type="text"
              name="supplier"
              error={errors.includes("supllier")}
              onBlur={removeValidation}
              onChange={(event) => {
                setSupplier(event.target.value);
              }}
            />
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
        <div className={styles["container-button-submit"]}>
          <Button label="Salvar" onClick={addProduct} type="submit" />
        </div>
      </div>
    </div>
  );
}
