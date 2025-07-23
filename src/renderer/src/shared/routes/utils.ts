import { useRoutesController } from '@renderer/shared/routes/controller';
import { Routes } from '@renderer/shared/routes/constants';

export const navigate = (route: Routes) => {
  const routesController = useRoutesController();

  routesController.setCurrentRoute(route);
};
