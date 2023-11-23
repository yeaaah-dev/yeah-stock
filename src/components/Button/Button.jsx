/* eslint-disable react/prop-types */
import styles from "../Button/Button.module.css";

export function Button({ label, buttonBackgroundOff, icon, ...rest }) {
  return (
    <button
      {...rest}
      className={
        buttonBackgroundOff === "yes"
          ? `${styles["normal_button"]} ${styles["background_off"]}`
          : styles["normal_button"]
      }
    >
      <span>
        {icon}
        {label}
      </span>
    </button>
  );
}
