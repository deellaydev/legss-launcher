import { createGlobalInstance } from "@renderer/utils/global-instance";

class LauncherState {
  opts  = {
    authorization: 'username',
    root: "./minecraft",
    version: {
      number: "1.14",
      type: "release"
    },
    memory: {
      max: "6G",
      min: "4G"
    }
  }

  constructor() {}

  launch() {
    console.log('launch:minecraft')
    console.log(this)
    window.electron.ipcRenderer.send('launch:minecraft', this.opts)
  }
}

export const { useLauncherState, LauncherStateProvider, LauncherStateContext } = createGlobalInstance(
  'LauncherState',
  () => new LauncherState()
)
