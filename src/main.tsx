import { createRoot } from "react-dom/client";
import "./index.css";
import StrictHandler from "./strict";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

createRoot(document.getElementById("root")!).render(
  <StrictHandler>
    <RouterProvider router={router}></RouterProvider>
  </StrictHandler>
);
