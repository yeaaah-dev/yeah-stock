/* eslint-disable react/prop-types */

import styles from "./styles.module.css";

export function Input({ borderNone, ...rest }) {
  console.log({ ...rest });
  return (
    <input
      {...rest}
      className={
        borderNone
          ? `${styles["input-header_border-none"]}`
          : `${styles["input-header"]}`
      }
    />
  );
}
