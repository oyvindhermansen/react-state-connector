import * as React from 'react';
import { storiesOf } from '@storybook/react';
import createState from '../src/index';

interface State {
  counter: number;
}

const { StateProvider, StateContext } = createState<State>({
  counter: 0
});

function Counter() {
  const globalState = React.useContext(StateContext);

  function increment() {
    return globalState.setState((prev) => ({
      ...globalState.state,
      counter: prev.counter + 1
    }));
  }

  function decrement() {
    return globalState.setState((prev) => ({
      ...globalState.state,
      counter: prev.counter - 1
    }));
  }

  return (
    <div>
      <h1>Counter: {globalState.state.counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

storiesOf('createState', module).add('Counter example', () => <Counter />);

export { StateProvider };
