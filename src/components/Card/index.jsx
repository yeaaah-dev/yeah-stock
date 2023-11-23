/* eslint-disable react/prop-types */
import { iconType } from "../Toggle/Toggle";
import { CardLayout } from "./CardLayout";
import { ListLayout } from "./ListLayout";

export function Card({ layout, product, onChangeModalStatusOpen }) {
  return (
    <>
      {layout === iconType.COLUMNS ? (
        <CardLayout
          product={product}
          onChangeModalStatusOpen={() => onChangeModalStatusOpen(product)}
        />
      ) : (
        <ListLayout
          product={product}
          onChangeModalStatusOpen={() => onChangeModalStatusOpen(product)}
        />
      )}
    </>
  );
}
