import style from "./header.module.css";
import RickAndMoryPhoto from "../../assets/images/RickAndMory.png";
import { Bell } from "phosphor-react";
import { Input } from "../Input";

export function Header() {
  return (
    <header>
      <div className={style["div-header"]}>
        <Input />

        <button className={style["button-add"]}>+ Adicionar produto</button>

        <button className={style["button-notification"]}>
          <Bell size={32} />
        </button>

        <img src={RickAndMoryPhoto} alt="Photo-user" />
      </div>
    </header>
  );
}
