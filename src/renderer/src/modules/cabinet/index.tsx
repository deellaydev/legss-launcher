import { Routes } from '@renderer/shared/routes/constants';
import { observer } from "mobx-react-lite";
import { navigate } from "@renderer/shared/routes/utils";

export const CabinetModule = observer(function CabinetModule() {

  return (
    <>
      <div>Cabinet</div>
      <button onClick={() => navigate(Routes.MAIN)}>Main</button>
    </>
  );
})
