import ReactDOM from "react-dom/client";
import "./styles/global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import { ErrorPage } from "./error-page";
import { RegistrationScreen } from "./pages/registrationScreen/RegistrationScreen";
import { Root } from "./routes/root";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
