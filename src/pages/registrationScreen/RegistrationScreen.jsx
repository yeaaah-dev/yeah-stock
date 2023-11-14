import styles from "../../pages/registrationScreen/RegistrationScreen.module.css";
import { Sidebar } from "../../components/sidebar";
import { Input } from "../../components/Input";
import { Image } from "@phosphor-icons/react";
import { Button } from "../../components/Button/Button";

export function RegistrationScreen() {
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
                <Input type="number" />
              </div>
              <div className={styles["input-quanty-mensure"]}>
                <span className={styles["title-inputs"]}>Mensure_unity</span>
                <Input type="number" />
              </div>
            </div>
          </div>
        </div>

        <div className={styles["inputs-purchase-price-currency-supplier"]}>
          <div className={styles["inputs-Purchase-price-currency"]}>
            <span className={styles["title-inputs"]}>Purchase price</span>
            <Input type="number" />
          </div>
          <div className={styles["inputs-Purchase-price-currency"]}>
            <span className={styles["title-inputs"]}>Sale price</span>
            <Input type="number" />
          </div>
          <div className={styles["inputs-Purchase-price-currency"]}>
            <span className={styles["title-inputs"]}>Currency</span>
            <Input type="number" />
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

        <div className={styles["div-button"]}>
            <Button
              label={"Salvar"}
              buttonBackgroundOff={"not"}
              className={styles["Button"]}
            />
          </div>
      </div>
    </div>
  );
}
