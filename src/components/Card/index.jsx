/* eslint-disable react/prop-types */
import { iconType } from "../Toggle/Toggle";
import { CardLayout } from "./CardLayout";
import { ListLayout } from "./ListLayout";

export function Card({ layout, product }) {
  return (
    <div>
      {layout === iconType.COLUMNS ? (
        <CardLayout product={product} />
      ) : (
        <ListLayout product={product} />
      )}
    </div>
  );
}
