/* eslint-disable react/prop-types */
import styles from "./Modal.module.css";
import FOTO from "../../assets/FOTO.png";
import { Trash, NotePencil, X } from "@phosphor-icons/react";

export const modalStatus = {
  OPEN: "open",
  CLOSE: "close",
};

export function Modal({
  name,
  quantity,
  measureUnity,
  purchasePrice,
  salePrice,
  currency,
  provider,
  active,
  onChangeModalStatusClose,
  goToRegistration,
}) {
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
            Name:{" "}
            <span className={styles["info-value"]}>
              {name ? name : "Calabresa de Tubarão Leitoa"}
            </span>
          </span>

          <span>
            Quantity:{" "}
            <span className={styles["info-value"]}>
              {quantity ? quantity : 106}
            </span>
          </span>

          <span>
            Measure unity:{" "}
            <span className={styles["info-value"]}>
              {measureUnity ? measureUnity : 106}
            </span>
          </span>

          <span>
            Purchase price:{" "}
            <span className={styles["info-value"]}>
              {purchasePrice ? purchasePrice : 535}
            </span>
          </span>

          <span>
            Sale Price:{" "}
            <span className={styles["info-value"]}>
              {salePrice ? salePrice : 512}
            </span>
          </span>

          <span>
            Currency:{" "}
            <span className={styles["info-value"]}>
              {currency ? currency : "Unity"}
            </span>
          </span>

          <span>
            Fornecedor:{" "}
            <span className={styles["info-value"]}>
              {provider ? provider : "Hugostoso"}
            </span>
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
          <textarea
            type="text"
            placeholder="Calabresa de tubarão leitoa enrolada com tripa de camarão boi, origem da Amazônia, perto do lago Ness."
          />
        </div>

        <div className={styles["buttons-div"]}>
          <button className={styles["edit-button"]} onClick={goToRegistration}>
            <NotePencil size={17} />
            Editar
          </button>

          <button className={styles["delete-button"]}>
            <Trash size={32}></Trash>
            Excluir
          </button>
        </div>
      </div>
    </section>
  );
}
