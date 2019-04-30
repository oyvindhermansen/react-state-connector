import * as React from 'react';
import { useState, createContext, SetStateAction } from 'react';

export interface DefaultContextValues<T> {
  state: T;
  setState: (nextState: SetStateAction<T>) => void;
}

export interface CreateState<T> {
  StateContext: React.Context<DefaultContextValues<T>>;
  StateProvider: (props: JSX.ElementChildrenAttribute) => JSX.Element;
}

const defaultContextValues: DefaultContextValues<any> = {
  state: null,
  setState: (nextState) => {}
};

/**
 * @param defaultState The global state of your application
 *
 * createState gives you the possibility to access and alter your global state using
 * React context under the hood.
 *
 * @returns StateContext
 * @returns StateProvider
 */
export default function createState<T>(defaultState: T): CreateState<T> {
  const StateContext = createContext(defaultContextValues);

  function StateProvider(props: {} & JSX.ElementChildrenAttribute) {
    const { children } = props;
    const [state, setState] = useState(defaultState);

    const providerValue = { state, setState: dispatch };

    function dispatch(nextState: SetStateAction<T>): void {
      setState(nextState);
    }

    return (
      <StateContext.Provider value={providerValue}>
        {children}
      </StateContext.Provider>
    );
  }

  return {
    StateContext,
    StateProvider
  };
}
