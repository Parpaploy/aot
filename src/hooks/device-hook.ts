import { useMediaQuery } from "react-responsive";
import { IUseDeviceHook } from "../interfaces/setup.interface";

export const useDevice = (): IUseDeviceHook => {
  const CheckResponsive = () => {
    return useMediaQuery({ query: "(max-width: 767px)" });
  };

  return { CheckResponsive };
};
