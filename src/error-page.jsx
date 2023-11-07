import { useRouteError } from "react-router-dom";
import style from "../src/pages/home/app.module.css";

export function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page" className={style["error-page"]}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
