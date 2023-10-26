/* eslint-disable react/prop-types */
import { Image, NotePencil } from "@phosphor-icons/react";
import styles from "./cardStyle.module.css";

export function CardLayout({ product }) {
  return (
    <div>
      <div className={styles["container_card"]}>
        <div className={styles["content_card"]}>
          <Image size={40} color="#8A8A8A" />
          <span>JPG</span>
        </div>

        <div className={styles["product_name"]}>
          <span>{product.title}</span>
          <button>
            <NotePencil size={14} color=" #1F7CFB" />
          </button>
        </div>

        <div className={styles["description_product"]}>
          <div>
            Quantily: <span>{product.quantify}</span>
          </div>
          <div>
            Mesure un.: <span>{product.measurein}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
