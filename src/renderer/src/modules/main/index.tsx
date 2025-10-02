import { Routes } from '@renderer/shared/routes/constants';
import { observer } from 'mobx-react-lite';
import { navigate } from "@renderer/shared/routes/utils";

import styles from "./main.module.scss";
import { useLauncherState } from '@renderer/shared/launcher/state';

export const MainModule = observer(function MainModule() {

  const state = useLauncherState()

  return (
    <div className={styles.wrapper}>
      <div>hello from main module</div>
      <button onClick={() => navigate(Routes.CABINET)}>Cabinet</button>
      <button onClick={() => state.launch()}>Launch</button>
    </div>
  );
});
