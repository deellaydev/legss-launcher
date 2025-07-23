
import { Routes } from "@renderer/shared/routes/constants";
import { makeAutoObservable } from "mobx";
import { createGlobalInstance } from "@renderer/utils/global-instance";

export class RoutesState {
  currentRoute: Routes = Routes.MAIN;

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentRoute(newRoute: Routes) {
    this.currentRoute = newRoute;
  }
}

export const { useRoutesState, RoutesStateProvider, RoutesStateContext } = createGlobalInstance(
  'RoutesState',
  () => new RoutesState()
);
