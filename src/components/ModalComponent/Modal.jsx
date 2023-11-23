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

export function Modal({
  product,
  onChangeModalStatusClose,
  goToEdition,
  onDeleteProduct,
}) {
  const {
    title,
    quantify,
    measurein,
    purchasePrice,
    salePrice,
    currency,
    supllier,
    active,
  } = product;

  return (
    <div className={styles["modal-section"]}>
      <div className={styles["button-title"]}>
        <div className={styles["modal-header"]}>
          <button
            className={styles["button-close"]}
            onClick={() => onChangeModalStatusClose(modalStatus.CLOSE)}
          >
            <X size={19} color="#FFFFFF" />
          </button>
        </div>

        <div className={styles["modal-title"]}>
          <h1>Product Details</h1>
        </div>
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
          Sale Price: <span className={styles["info-value"]}>{salePrice}</span>
        </span>

        <span>
          Currency: <span className={styles["info-value"]}>{currency}</span>
        </span>

        <span>
          Supplier: <span className={styles["info-value"]}>{supllier}</span>
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
        <span>Description:</span>
      </div>

      <div className={styles["product-description"]}>
        <Textarea
          location={true}
          rows="4"
          type="text"
          placeholder="Calabresa de tubarão leitoa enrolada com tripa de camarão boi, origem da Amazônia, perto do lago Ness."
          //Essa aqui eu vou arrumar na branch de criação de funções /^\
        />
      </div>

      <div className={styles["buttons-div"]}>
        <button className={styles["edit-button"]} onClick={goToEdition}>
          <NotePencil className={styles["pencil-icon-button"]} />
          <span>Edition</span>
        </button>

        <button onClick={onDeleteProduct} className={styles["delete-button"]}>
          <Trash className={styles["trash-icon-button"]}></Trash>
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
}
