import { Routes } from '@renderer/shared/routes/constants';
import { observer } from 'mobx-react-lite';
import { navigate } from "@renderer/shared/routes/utils";

export const MainModule = observer(function MainModule() {

  return (
    <>
      <div>hello from main module</div>
      <button onClick={() => navigate(Routes.CABINET)}>Cabinet</button>
    </>
  );
});
