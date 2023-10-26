import { MagnifyingGlass } from "@phosphor-icons/react";
import styles from "./styles.module.css";

export function Input({ ...rest }) {
  return (
    <div className={styles["input-wrapper"]}>
      <button className={styles["button-search"]}>
        <MagnifyingGlass size={16} />
      </button>

      <input
        {...rest}
        type="text"
        className={styles["input-header"]}
        placeholder="Pesquisar produto"
      />
    </div>
  );
}

