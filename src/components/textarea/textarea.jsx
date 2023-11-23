/* eslint-disable react/prop-types */
import styles from "../textarea/textarea.module.css";

export function Textarea({ location, error = false, ...rest }) {
  return (
    <>
      <textarea
        {...rest}
        className={
          location
            ? `${styles["product-description-textarea"]}`
            : `${styles["description-products-content-textarea"]}`
        }
      />

      {error && <span className={styles.error}>{rest.name} is required</span>}
    </>
  );
}
