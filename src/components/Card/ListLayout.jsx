/* eslint-disable react/prop-types */
import { Image, NotePencil } from "@phosphor-icons/react";
import styles from "./listStyles.module.css";

export function ListLayout({ product }) {
  return (
    <div className={styles["container_list_card"]}>
      <div className={styles["content_card_list"]}>
        <Image size={30} color="#8A8A8A" />
        <span>JPG</span>
      </div>

      <div className={styles["all_descriptions"]}>
        <div className={styles["product_name_list_card"]}>
          <span>{product.title}</span>
        </div>

        <div className={styles["description_product_list_card"]}>
          <div>
            Quantily: <span>{product.quantify}</span>
          </div>
          <div>
            Mesure un.: <span>{product.measurein}</span>
          </div>
          <div>
            Purchase price: <span>{product.purchasePrice}</span>
          </div>
          <div>
            Sale Price: <span>{product.salePrice}</span>
          </div>
          <div>
            Currency: <span>Unity </span>
          </div>
          <div>
            Fornecedor: <span>Hugostoso</span>
          </div>
        </div>
      </div>

      <div className={styles["pencil_edit"]}>
        <button>
          <NotePencil size={14} color=" #1F7CFB" />
        </button>
      </div>
    </div>
  );
}
