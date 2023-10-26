/* eslint-disable react/prop-types */
import { iconType } from "../Toggle/Toggle";
import { CardLayout } from "./CardLayout";
import { ListLayout } from "./ListLayout";
import style from '../Card/listStyles.module.css'

export function Card({ layout, product }) {
  return (

    <div>
      {layout === iconType.COLUMNS ? (
        <div className={style['teste02']}>
          <CardLayout
            product={product} />
        </div>
      ) : (
        <div className={style['list-product-container']}>
          <ListLayout product={product} />
        </div>
      )}
    </div>

  );
}
