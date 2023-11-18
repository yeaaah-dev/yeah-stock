/* eslint-disable react/prop-types */
import style from "../textarea/textarea.module.css"

export function Textarea({
    location,
    ...rest
}) {
    return (
        <textarea
            {...rest}
            className={location ? `${style["product-description-textarea"]
                }` : `${style["description-products-content-textarea"]}`} />
    );
}