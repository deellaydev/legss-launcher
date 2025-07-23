import { MainModule } from '@renderer/modules/main';
import { useRoutesState } from '@renderer/shared/routes/state';
import { Routes } from '@renderer/shared/routes/constants';
import { CabinetModule } from '@renderer/modules/cabinet';
import { observer } from 'mobx-react-lite';
import { useEffect } from "react";

const modules = {
  [Routes.MAIN]: <MainModule />,
  [Routes.CABINET]: <CabinetModule />,
};

export const App = observer(function App() {
  const routesState = useRoutesState();

  useEffect(() => {

  }, [routesState.currentRoute]);

  return <>{modules[routesState.currentRoute]}</>;
});
