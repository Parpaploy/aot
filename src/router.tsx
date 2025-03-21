import { createBrowserRouter } from "react-router-dom";
import { App } from "./app";
import { MobileLayout } from "./layouts/mobile-layout/mobile-layout";
import { PcLayout } from "./layouts/pc-layout/pc-layout";
import { MobileHomepage } from "./pages/mobile-pages/mobile-hompage";
import { PcHomepage } from "./pages/pc-pages/pc-homepage";

export const router = createBrowserRouter([
  {
    path: "",
    element: <App mobile={<MobileLayout />} pc={<PcLayout />} />,
    children: [
      {
        path: "",
        element: <App mobile={<MobileHomepage />} pc={<PcHomepage />} />,
      },
    ],
  },
]);
