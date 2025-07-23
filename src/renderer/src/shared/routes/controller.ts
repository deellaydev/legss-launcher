import { RoutesState, useRoutesState } from '@renderer/shared/routes/state';
import { Routes } from "@renderer/shared/routes/constants";
import { makeAutoObservable } from "mobx";
import { createGlobalInstance } from "@renderer/utils/global-instance";

class RoutesController {
  state!: RoutesState;

  constructor() {
    makeAutoObservable(this);
  }

  resolve(state: RoutesState) {
    this.state = state;
  }

  setCurrentRoute(route: Routes) {
    this.state.setCurrentRoute(route);
  }
}

export const { useRoutesController, RoutesControllerProvider, RoutesControllerContext } =
  createGlobalInstance(
    'RoutesController',
    () => new RoutesController(),
    (ctx) => {
      const state = useRoutesState();

      ctx.resolve(state);
    }
  );
