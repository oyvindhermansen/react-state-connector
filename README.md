# React state connector

Simple global state management with native React context

# react-state-connector

## Usage

```tsx
import createState from '@oyvindher/react-state-connector';

interface MyGlobalState {
  counter: number;
}

// Export as a singleton
const { StateProvider, StateContext } = createState<MyGlobalState>(
  counter: 0
)

// Wrap StateProvider around your application.
function App() {
  return (
    <StateProvider>
      {/* Application */}
    </StateProvider>
  )
}

// Use StateContext together with useContext to access your global state
function Counter() {
  const {state, setState} = useContext(StateContext);

  return (
    <div>
      <h1>{state.counter}</h1>
      <button onClick={() => setState({...state, counter: +1 })}>Increment</button>
    </div>
  )
}

```

> Nice to know: You can also use `StateContext.Consumer` instead of `useContext(StateContext)`, and use the render-prop to access the global state!
