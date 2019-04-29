import * as React from 'react';
import { useState, createContext, SetStateAction } from 'react';

interface DefaultContextValues<T> {
  state: T;
  setState: (nextState: SetStateAction<T>) => void;
}

interface CreateState<T> {
  StateContext: React.Context<DefaultContextValues<T>>;
  StateProvider: (props: JSX.ElementChildrenAttribute) => JSX.Element;
}

const defaultContextValues: DefaultContextValues<any> = {
  state: null,
  setState: (nextState) => {}
};

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
