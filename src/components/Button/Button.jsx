/* eslint-disable react/prop-types */
import styles from "../Button/Button.module.css";

export function Button({ label, buttonBackgroundOff, icon: icon }) {
  return (
    <div>
      <button
        className={
          buttonBackgroundOff === "yes"
            ? `${styles["normal_button"]} ${styles["background_off"]}`
            : styles["normal_button"]
        }
      >
        {icon}
        {label}
      </button>
    </div>
  );
}
