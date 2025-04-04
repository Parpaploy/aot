import { createBrowserRouter } from "react-router-dom";
import { App } from "./app";
import { MobileLayout } from "./layouts/mobile-layout/mobile-layout";
import { PcLayout } from "./layouts/pc-layout/pc-layout";
import { MobileHomepage } from "./pages/mobile-pages/mobile-hompage";
import { PcHomepage } from "./pages/pc-pages/pc-homepage";
import { MobileUnitsPage } from "./pages/mobile-pages/mobile-units-page";
import { MobileTitansPage } from "./pages/mobile-pages/mobile-titans-page";
import { MobileWallsPage } from "./pages/mobile-pages/mobile-walls-page";
import { MobileCharactersPage } from "./pages/mobile-pages/mobile-characters-page";
import { PcUnitsPage } from "./pages/pc-pages/pc-units-page";
import { PcTitansPage } from "./pages/pc-pages/pc-titans-page";
import { PcWallsPage } from "./pages/pc-pages/pc-walls-page";
import { PcCharactersPage } from "./pages/pc-pages/pc-characters-page";

export const router = createBrowserRouter([
  {
    path: "",
    element: <App mobile={<MobileLayout />} pc={<PcLayout />} />,
    children: [
      {
        path: "",
        element: <App mobile={<MobileHomepage />} pc={<PcHomepage />} />,
      },
      {
        path: "/units",
        element: <App mobile={<MobileUnitsPage />} pc={<PcUnitsPage />} />,
      },
      {
        path: "/titans",
        element: <App mobile={<MobileTitansPage />} pc={<PcTitansPage />} />,
      },
      {
        path: "/walls",
        element: <App mobile={<MobileWallsPage />} pc={<PcWallsPage />} />,
      },
      {
        path: "/characters",
        element: (
          <App mobile={<MobileCharactersPage />} pc={<PcCharactersPage />} />
        ),
      },
    ],
  },
]);
