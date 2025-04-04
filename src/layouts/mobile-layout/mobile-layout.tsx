import { Outlet } from "react-router-dom";
import MobileNavbar from "../../components/mobile-components/mobile-navbar";

export function MobileLayout() {
  return (
    <>
      <MobileNavbar />
      <Outlet />
    </>
  );
}
