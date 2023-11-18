/* eslint-disable react/prop-types */
import { iconType } from "../Toggle/Toggle";
import { CardLayout } from "./CardLayout";
import { ListLayout } from "./ListLayout";
import style from "../Card/listStyles.module.css";

export function Card({ layout, product, onChangeModalStatusOpen }) {
  return (
    <div>
      {layout === iconType.COLUMNS ? (
        <CardLayout
          product={product}
          onChangeModalStatusOpen={() => onChangeModalStatusOpen(product)}
        />
      ) : (
        <div className={style["list-product-container"]}>
          <ListLayout
            product={product}
            onChangeModalStatusOpen={() => onChangeModalStatusOpen(product)}
          />
        </div>
      )}
    </div>
  );
}
