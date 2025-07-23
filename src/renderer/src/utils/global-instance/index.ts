import { Context, createContext, createElement, JSX, PropsWithChildren } from 'react';

type Map<T> = {
  provider: (props: PropsWithChildren) => JSX.Element;
  hook: () => T;
  context: Context<T>;
};

type GlobalInstanceType<T, S extends string> = {
  [Prop in keyof Pick<Map<T>, 'hook'> as `use${Capitalize<S>}`]: Map<T>[Prop];
} & {
  [Prop in keyof Pick<Map<T>, 'provider'> as `${Capitalize<S>}Provider`]: Map<T>[Prop];
} & {
  [Prop in keyof Pick<Map<T>, 'context'> as `${S}Context`]: Map<T>[Prop];
};

export function createGlobalInstance<T, S extends string>(
  name: S,
  createFn: () => T,
  _hook: (ctx: T, initialized: boolean) => void = () => {}
): GlobalInstanceType<T, S> {
  const instance = createFn();
  const context = createContext<T>(instance);

  const capitalizeName = name[0].toUpperCase() + name.slice(1);
  const providerName = `${capitalizeName}Provider`;
  const hookName = `use${capitalizeName}`;
  const contextName = `${name}Context`;

  const Provider = ({ children }: PropsWithChildren) => {
    return createElement(context.Provider, { value: instance }, children);
  };
  Provider.displayName = providerName;

  const useHook = () => {
    _hook?.(instance, (instance as any).__hook_called);
    (instance as any).__hook_called = true;

    return instance;
  };

  return {
    [hookName]: useHook,
    [providerName]: Provider,
    [contextName]: context
  } as never;
}
