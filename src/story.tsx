import * as React from 'react';
import { storiesOf } from '@storybook/react';
import createState from '../src/index';

interface State {
  counter: number;
  posts: string[];
}

const { StateProvider, StateContext } = createState<State>({
  counter: 0,
  posts: []
});

function Counter() {
  const globalState = React.useContext(StateContext);

  return (
    <div>
      {globalState.state.counter}
      <button
        onClick={() =>
          globalState.setState((prev: State) => {
            return {
              ...globalState.state,
              counter: prev.counter + 1
            };
          })
        }
      >
        Increment
      </button>
    </div>
  );
}

storiesOf('createState', module).add('Default', () => (
  <>
    <Counter />
  </>
));

export { StateProvider };
