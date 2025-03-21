export interface IUseDeviceHook {
  CheckResponsive: () => boolean;
}

export interface IAppProps {
  mobile: React.ReactNode;
  pc: React.ReactNode;
}
