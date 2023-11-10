/* eslint-disable react/prop-types */

import styles from "./styles.module.css";

export function Input({ borderNone, isNumber, ...rest }) {
  return (
    <input
      {...rest}
      type={isNumber === "yes" ? "number" : "text"}
      className={borderNone === "yes" ? `${styles["input-header_border-none"]}` : `${styles["input-header"]}`}
      placeholder={isNumber === "yes" || isNumber === "not" ? "" : "Pesquisar produto"}
    />
  );
}

