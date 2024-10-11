import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/home/Home.jsx";
import Logement from "./pages/logement/Logement.jsx";
import APropos from "./pages/Apropos/Apropos.jsx";


import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    /*errorElement: <ErrorPage />,*/
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "logements/:id",
        element: <Logement />,
      },
      {
        path: "a-propos",
        element: <APropos />, 
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
