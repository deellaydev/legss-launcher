import { PropsWithChildren } from "react";
import { RoutesProvider } from "@renderer/shared/routes/provider";

export const GlobalProvider = ({children}: PropsWithChildren) => {
  return (
    <RoutesProvider>
      {children}
    </RoutesProvider>
  )
}
