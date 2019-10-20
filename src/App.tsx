import React, { Fragment, useContext, useReducer } from 'react';
import { Store } from './Store';

const App: React.FC = () => {
  const store = useContext(Store);
  const reducer = (state: number, action: any): number => {
    console.log(action);
    switch (action) {
      case 'INCREMENT':
        return ++state;
      case 'DECREMENT':
        return --state;
      case 'RESET': {
        return (state = 0);
      }
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <Fragment>
      {console.log(store)}
      <h1>Rick and Morty</h1>
      <p>Pick your favorite episode!!!</p>

      <>
        <div>{count}</div>
        <button onClick={() => dispatch('INCREMENT')}>+</button>
        <button onClick={() => dispatch('DECREMENT')}>-</button>
        <button onClick={() => dispatch('RESET')}>+</button>
      </>
    </Fragment>
  );
};

export default App;
