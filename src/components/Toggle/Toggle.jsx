import { SquaresFour, List } from "@phosphor-icons/react";
import styles from "./Toggle.module.css";
import { useState } from "react";

export const iconType = {
  COLUMNS: "columns",
  LIST: "list",
};

// eslint-disable-next-line react/prop-types
export function Toggle({ onChange }) {
  const [displaySelected, setDisplaySelected] = useState(iconType.COLUMNS);

  return (
    <div className={styles["nav-list"]}>
      <SquaresFour
        className={
          displaySelected === iconType.COLUMNS
            ? styles["icon-active"]
            : styles["icon-not-active"]
        }

        onClick={() => {
          setDisplaySelected(iconType.COLUMNS);
          onChange(() => iconType.COLUMNS);
        }}

        size={25}
      />

      <List
        className={
          displaySelected === iconType.LIST ? styles["icon-active"] : styles["icon-not-active"]
        }

        onClick={() => {
          setDisplaySelected(iconType.LIST);
          onChange(() => iconType.LIST);
        }}

        size={25}
      />

    </div>
  );
}
export default Toggle;
