import React,{useReducer} from 'react';
import './App.css';
import ComponentA from './components/useReducerWithContext/ComponentA';
import ComponentB from './components/useReducerWithContext/ComponentB';
import ComponentC from './components/useReducerWithContext/ComponentC';

export const CountContext = React.createContext()

const initialState = 0;
const reducer = (state,action) => {
   switch(action){
     case 'INCREMENT':
          return state + 1;
     case 'DECREMENT':
          return state - 1;
     case 'RESET':
          return initialState;

     default:
        return state;
   }
}


function App() {
  const [count,dispatch] = useReducer(reducer,initialState);

  return ( 
    <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
      <div className="App">
        Count - {count}
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
      </div>
    </CountContext.Provider>
  );
}



export default App;
