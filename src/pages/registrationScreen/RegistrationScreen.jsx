import { CaretDown, CaretUp, Image } from "@phosphor-icons/react";
import styles from "../../pages/registrationScreen/RegistrationScreen.module.css";
import { Sidebar } from "../../components/sidebar";
import { Input } from "../../components/Input";
import { useState } from "react";

export function RegistrationScreen() {
  const [quantify, setQuantify] = useState(0);
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [salePrice, setSalePrice] = useState(0);
  const [mensureUnity, setMensureUnity] = useState(0);
  const [currency, setCurrency] = useState(0);

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
              <Input type="text" placeholder="" />
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
                    className={styles["input"]}
                    value={quantify === 0 ? "" : quantify}
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
                    className={styles["input"]}
                    value={mensureUnity === 0 ? "" : mensureUnity}
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
                value={purchasePrice === 0 ? "" : purchasePrice}
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
                className={styles["input"]}
                value={salePrice === 0 ? "" : salePrice}
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
                className={styles["input"]}
                value={currency === 0 ? "" : currency}
              />
            </div>
          </div>
          <div className={styles["inputs-description-supplier"]}>
            <span className={styles["title-inputs"]}>Fornecedor</span>
            <Input type="text" />
          </div>
        </div>

        <div className={styles["description-products-content"]}>
          <span className={styles["title-inputs"]}>Descrição do produto</span>
          <textarea></textarea>
        </div>
      </div>
    </div>
  );
}
