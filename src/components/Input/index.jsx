/* eslint-disable react/prop-types */

import styles from "./styles.module.css";

export function Input({ icon, label, borderNone, error = false, ...rest }) {
  return (
    <>
      <input
        {...rest}
        className={
          borderNone
            ? `${styles["input-header_border-none"]}`
            : `${styles["input-header"]}`
        }
      />
      {label}
      {icon}

      {error && <span className={styles.error}>{rest.name} is required</span>}
    </>
  );
}
