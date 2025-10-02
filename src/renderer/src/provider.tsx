import { PropsWithChildren } from "react";
import { RoutesProvider } from "@renderer/shared/routes/provider";
import { LauncherStateProvider } from "@renderer/shared/launcher/state";

export const GlobalProvider = ({children}: PropsWithChildren) => {
  return (
    <RoutesProvider>
      <LauncherStateProvider>
        {children}
      </LauncherStateProvider>
    </RoutesProvider>
  )
}
