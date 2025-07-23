import { PropsWithChildren } from "react";
import { RoutesStateProvider } from "@renderer/shared/routes/state";
import { RoutesControllerProvider } from "@renderer/shared/routes/controller";

export const RoutesProvider = ({children}: PropsWithChildren) => {
  return (
    <RoutesStateProvider>
      <RoutesControllerProvider>
        {children}
      </RoutesControllerProvider>
    </RoutesStateProvider>
  )
}
