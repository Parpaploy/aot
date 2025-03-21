import { StrictMode } from "react";

export default function StrictHandler({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {import.meta.env.VITE_MODE == "dev" ? (
        <>
          <StrictMode>{children}</StrictMode>
        </>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
