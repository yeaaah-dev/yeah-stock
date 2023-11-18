/* eslint-disable react/prop-types */

import styles from "./styles.module.css";

export function Input({ borderNone, error = false, ...rest }) {
  return (
    <div>
      <input
        {...rest}
        className={
          borderNone
            ? `${styles["input-header_border-none"]}`
            : `${styles["input-header"]}`
        }
      />

      {error && <span className={styles.error}>{rest.name} is required</span>}
    </div>
  );
}
