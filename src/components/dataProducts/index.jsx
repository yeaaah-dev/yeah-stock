/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import { CaretDown, CaretUp, Image, Trash } from "@phosphor-icons/react";
import { v4 as uuidv4 } from "uuid";
import { validateFields } from "../../utils";

import styles from "../../components/dataProducts/styles.module.css";
import { Sidebar } from "../../components/sidebar";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button/Button";
import { Textarea } from "../../components/textarea/textarea";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function DataProducts({
  editProduct,
  isEdit,
  onDeleteProduct,
  newProductValue = {},
}) {
  const [nameProduct, setNameProduct] = useState("");
  const [quantify, setQuantify] = useState(0);
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [salePrice, setSalePrice] = useState(0);
  const [mensureUnity, setMensureUnity] = useState(0);
  const [currency, setCurrency] = useState(0);
  const [supllier, setSupplier] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);
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

  function goToHome() {
    navigate("/");
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
      description: description,
      currency: currency,
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
      description: description,
      currency: currency,
      id: uuidv4(),
    };

    const validate = validateFields(values);

    if (validate.length) {
      setErrors(validate);
      return;
    }
    const { success } = toastInstance("product added successfully");
    const { error } = toastInstance("Unable to register your product !");
    try {
      await axios.post(`http://localhost:3004/products`, values);

      success();
      setTimeout(() => goToHome(), 3000);
    } catch (err) {
      error();
    }
  }

  const preventMinus = (e) => {
    if (e.code === "Minus") {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (newProductValue.id) {
      setNameProduct(newProductValue.title);
      setCurrency(newProductValue.quantify);
      setPurchasePrice(newProductValue.purchasePrice);
      setQuantify(newProductValue.quantify);
      setDescription(newProductValue.description);
      setMensureUnity(newProductValue.measurein);
      setSalePrice(newProductValue.salePrice);
      setSupplier(newProductValue.supllier);
    }
  }, [newProductValue]);

  return (
    <div className={styles["registration-container"]}>
      <Sidebar />
      <div className={styles["layout-registration"]}>
        <div className={styles["title-button"]}>
          <h1 className={styles["title-page"]}>Product</h1>
          {isEdit ? (
            <Button
              label={"Delete"}
              buttonBackgroundOff={"yes"}
              icon={<Trash />}
              onClick={onDeleteProduct}
            />
          ) : null}
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
                value={nameProduct}
                name="Product`s name"
                label="Product`s name"
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
                      onClick={() => setQuantify(Number(quantify) + 1)}
                      className={styles["icon-caret-up"]}
                      size={12}
                    ></CaretUp>
                    <div className={styles["line"]}></div>
                    <CaretDown
                      size={12}
                      className={styles["icon-caret-down"]}
                      onClick={() => {
                        if(quantify == 0) {
                          return setQuantify(0)
                        }
                        setQuantify(quantify - 1)
                      }}
                    ></CaretDown>
                  </div>
                  <div className={styles["input-amount-products"]}>
                    <Input
                      type="number"
                      min="0"
                      label="quantify"
                      name="quantify"
                      value={quantify}
                      error={errors.includes("quantify")}
                      onKeyPress={preventMinus}
                      className={styles["input"]}
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
                      onClick={() => setMensureUnity(Number(mensureUnity) + 1)}
                      className={styles["icon-caret-up"]}
                      size={12}
                    ></CaretUp>
                    <div className={styles["line"]}></div>
                    <CaretDown
                      size={12}
                      className={styles["icon-caret-down"]}
                      onClick={() => {
                        if(mensureUnity == 0) {
                          return setMensureUnity(0);
                        }
                        setMensureUnity(mensureUnity - 1)
                      }}
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
                  onClick={() => setPurchasePrice(Number(purchasePrice) + 1)}
                  className={styles["icon-caret-up"]}
                  size={12}
                ></CaretUp>
                <div className={styles["line"]}></div>
                <CaretDown
                  size={12}
                  className={styles["icon-caret-down"]}
                  onClick={() => {
                    if(purchasePrice == 0) {
                      return setPurchasePrice(0);
                    }
                    setPurchasePrice(purchasePrice - 1)
                  }}
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
                  onClick={() => setSalePrice(Number(salePrice) + 1)}
                  className={styles["icon-caret-up"]}
                  size={12}
                ></CaretUp>
                <div className={styles["line"]}></div>
                <CaretDown
                  size={12}
                  className={styles["icon-caret-down"]}
                  onClick={() => {
                    if(salePrice == 0) {
                      return setSalePrice(0);
                    }
                    setSalePrice(salePrice - 1)
                  }}
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
                  onClick={() => setCurrency(Number(currency) + 1)}
                  className={styles["icon-caret-up"]}
                  size={12}
                ></CaretUp>
                <div className={styles["line"]}></div>
                <CaretDown
                  size={12}
                  className={styles["icon-caret-down"]}
                  onClick={() => {
                    if(currency == 0) {
                      return setCurrency(0);
                    }
                    setCurrency(currency - 1)
                  }}
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
                name="Supllier"
                label="Supllier"
                value={supllier}
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
          <span className={styles["title-inputs"]}>Product Description</span>
          <Textarea
            name="description"
            error={errors.includes("description")}
            value={description}
            onBlur={removeValidation}
            onChange={(e) => {
              setDescription(e.currentTarget.value);
            }}
          />
        </div>
        <ToastContainer position="top-right" />
        <div className={styles["container-button-submit"]}>
          <Button
            label={isEdit ? "Editar" : "Salvar"}
            onClick={() => {
              if (isEdit) {
                const editionValues = {
                  title: nameProduct,
                  quantify: quantify,
                  measurein: mensureUnity,
                  purchasePrice: purchasePrice,
                  salePrice: salePrice,
                  supllier: supllier,
                  description: description,
                  currency: currency,
                }

                const validate = validateFields(editionValues);

                if (validate.length) {
                  setErrors(validate);
                  return;
                }

                return editProduct();
              } else {
                return addProduct();
              }
            }}
            type="submit"
          />
        </div>
      </div>
    </div> //Essa aqui eu vou editar na branch das funções da pagina edition
  );
}
