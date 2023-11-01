import { useState } from "react";
import styles from "../sidebar/styles.module.css";
import logo from "../../assets/imgs/LOGO.svg";
import {
  Trash,
  User,
  GearSix,
  HouseLine,
  SignOut,
} from "@phosphor-icons/react";

const buttonName = {
  START: "start",
  TRASH: "trash",
  PROFILE: "profile",
  SETTINGS: "settings",
  EXIT: "exit",
};

export function Sidebar() {
  const [buttonSelected, setButtonSelected] = useState(buttonName.START);

  return (
    <div className={styles["container-all"]}>
      <div className={styles["container"]}>
        <div className={styles["logo"]}>
          <img src={logo} alt="Logo" />
        </div>

        <div className={styles["div-line"]}>
          <div className={styles.line}></div>
        </div>

        <div className={styles["buttons"]}>
          <button
            className={
              buttonSelected === buttonName.START
                ? styles["button-selected"]
                : styles["button-not-selected"]
            }
            onClick={() => setButtonSelected(buttonName.START)}
          >
            <HouseLine size={17} />
            Inicio
          </button>

          <button
            className={
              buttonSelected === buttonName.TRASH
                ? styles["button-selected"]
                : styles["button-not-selected"]
            }
            onClick={() => setButtonSelected(buttonName.TRASH)}
          >
            <Trash size={17} />
            Lixeira
          </button>

          <button
            className={
              buttonSelected === buttonName.PROFILE
                ? styles["button-selected"]
                : styles["button-not-selected"]
            }
            onClick={() => setButtonSelected(buttonName.PROFILE)}
          >
            <User size={17} />
            Perfil
          </button>

          <div className={styles["div-line-two"]}>
            <div className={styles["line"]}></div>
          </div>

          <button
            className={
              buttonSelected === buttonName.SETTINGS
                ? styles["button-selected"]
                : styles["button-not-selected"]
            }
            onClick={() => setButtonSelected(buttonName.SETTINGS)}
          >
            <GearSix size={17} />
            configuração
          </button>

          <button
            className={
              buttonSelected === buttonName.EXIT
                ? styles["button-exit-selected"]
                : styles["button-exit-not-selected"]
            }
            onClick={() => setButtonSelected(buttonName.EXIT)}
          >
            <SignOut size={17} />
            Sair
          </button>
        </div>
      </div>
      <div className={styles["div-line-three"]}>
        <div className={styles["line-vertical"]}></div>
      </div>
    </div>
  );
}
