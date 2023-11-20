/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import styles from "./Modal.module.css";
import FOTO from "../../assets/FOTO.png";
import { Trash, NotePencil, X } from "@phosphor-icons/react";
import { Textarea } from "../textarea/textarea";

export const modalStatus = {
  OPEN: "open",
  CLOSE: "close",
};

export function Modal({ product, onChangeModalStatusClose, onDeleteProduct }) {
  const {
    title,
    quantify,
    measurein,
    purchasePrice,
    salePrice,
    currency,
    supllier,
    active,

    goToRegistration,
  } = product;

  return (
    <section className={styles["modal-section"]}>
      <div className={styles["modal-content"]}>
        <div className={styles["modal-header"]}>
          <button onClick={onChangeModalStatusClose}>
            <X size={19} color="#FFFFFF" />
          </button>
        </div>

        <div className={styles["modal-title"]}>
          <h1>Detalhes do produto</h1>
        </div>

        <div className={styles["product-info"]}>
          <span>
            Name: <span className={styles["info-value"]}>{title}</span>
          </span>

          <span>
            Quantity: <span className={styles["info-value"]}>{quantify}</span>
          </span>

          <span>
            Measure unity:{" "}
            <span className={styles["info-value"]}>{measurein}</span>
          </span>

          <span>
            Purchase price:{" "}
            <span className={styles["info-value"]}>{purchasePrice}</span>
          </span>

          <span>
            Sale Price:{" "}
            <span className={styles["info-value"]}>{salePrice}</span>
          </span>

          <span>
            Currency: <span className={styles["info-value"]}>{currency}</span>
          </span>

          <span>
            Fornecedor: <span className={styles["info-value"]}>{supllier}</span>
          </span>

          <span>
            Active:{" "}
            <span className={styles["info-value"]}>
              {active ? active : "yes or no"}
            </span>
          </span>
        </div>

        <div className={styles["product-image"]}>
          <img src={FOTO} alt="product-image" />
        </div>

        <div className={styles["subtitle"]}>
          <h2>Descrição:</h2>
        </div>

        <div className={styles["product-description"]}>
          <Textarea
            location={true}
            type="text"
            placeholder="Calabresa de tubarão leitoa enrolada com tripa de camarão boi, origem da Amazônia, perto do lago Ness."
          />
        </div>

        <div className={styles["buttons-div"]}>
          <button className={styles["edit-button"]} onClick={goToRegistration}>
            <NotePencil size={17} />
            Editar
          </button>

          <button onClick={onDeleteProduct} className={styles["delete-button"]}>
            <Trash size={32}></Trash>
            Excluir
          </button>
        </div>
      </div>
    </section>
  );
}
