import { useDevice } from "./hooks/device-hook";
import { IAppProps } from "./interfaces/setup.interface";

export function App({ mobile, pc }: IAppProps) {
  const { CheckResponsive } = useDevice();
  const isMobile = CheckResponsive();

  return <>{isMobile ? mobile : pc}</>;
}
