import ReactDOM from "react-dom/client";
import "./styles/global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import { ErrorPage } from "./error-page";
import { RegistrationScreen } from "./pages/registration/RegistrationScreen";
import { Root } from "./routes/root";
import { EditScreen } from "./pages/edition";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/registration",
    element: <RegistrationScreen />,
  },
  {
    path: "/edition/:id",
    element: <EditScreen />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
