/* eslint-disable react/prop-types */
import { Image, NotePencil } from "@phosphor-icons/react";
import styles from "./listStyles.module.css";

export function ListLayout({ product, onChangeModalStatusOpen }) {
  return (
    <div className={styles["container_list_card"]}>
      <div className={styles["image-products-props"]}>
        <div className={styles["content_card_list"]}>
          <Image className={styles["image"]} color="#8A8A8A" />
          <span className={styles["JPG"]}>JPG</span>
        </div>
        <div className={styles["all_descriptions"]}>
          <div className={styles["product_name_list_card"]}>
            <span>{product.title}</span>
          </div>

          <div className={styles["description_product_list_card"]}>
            <div className={styles["description"]}>
              Quantily: <span>{product.quantify}</span>
            </div>
            <div className={styles["description"]}>
              Mesure: <span>{product.measurein}</span>
            </div>
            <div className={styles["description"]}>
              Price: <span>{product.purchasePrice}</span>
            </div>
            <div className={styles["description"]}>
              Sale: <span>{product.salePrice}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["pencil_edit"]}>
        <button onClick={onChangeModalStatusOpen}>
          <NotePencil size={14} color=" #1F7CFB" />
        </button>
      </div>
    </div>
  );
}
