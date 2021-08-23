// import logo from './logo.svg';

import React from 'react';
import './App.css';
import ComponentC from './components/useContext/ComponentC';
import ComponentA from './components/useContext/ComponentA';
// import IntervalCounter from './components/useEffectHook/IntervalCounter';
// import MouseContainer from './components/useEffectHook/MouseContainer';
// import useEffectHook from './components/Me-learn/UseEffectHook';
// import UseStateHookWithArray from './components/reactHooks/UseStateHookWithArray';
// import HookMouse from './components/useEffectHook/HookMouse';

// import ComponetC from './components/Context/ComponetC';
// import { UserProvider } from './components/Context/userContext';
// import UseStateHook from './components/reactHooks/UseStateHook';
// import UseStateHookWithObject from './components/reactHooks/UseStateHookWithObject';
// import USeStateHookWithPreState from './components/reactHooks/USeStateHookWithPreState';
// import ClickCounter from './components/higherOrderComponents/ClickCounter';
// import HoverCounter from './components/higherOrderComponents/HoverCounter';
// import FrParentInput from './components/ref/FrParentInput';
// import RefDemo from './components/ref/RefDemo';
// import RefParent from './components/ref/RefParent';
// import ParentComponent from './components/PureComponent/ParentComponent';
// import Parent from './components/ForwardingRef/Parent';
// import ClickCounter from './components/heigherOrderComponets/ClickCounter';
// import HoverCounter from './components/heigherOrderComponets/HoverCounter';
// import Table from './components/Table';
// import RefsDemo from './RefsDemo';
// import Hello from './components/Hello'
// import Welcome from './components/Welcome'
// import EventClass from './components/EventClass'
// import EventBind from './components/EventBind'
// import ParentComponent from './components/ParentComponent'
// import ConditionalRendering from './components/ConditionalRendering'
// import ListComponent from './components/ListComponent'
// import StyleSheet from './components/StyleSheet'
// import Form from './components/Form';
// import LifeCycleA from './components/LifeCycleA';
// import FragmentDemo from './components/FragmentDemo';
//  import FocusInput from './components/focus/FocusInput';
// import Portals  from './components/portals';
// import HeroComponent from './components/HeroComponent';
// import ErrorBountary from './components/ErrorBountary';
// import ClickCounter from './components/RenderProps/ClickCounter';
// import Counter from './components/RenderProps/Counter';
// import HoverCounter from './components/RenderProps/HoverCounter';
// import User from './components/RenderProps/User';
export const UserContext = React.createContext();
export const ChanelContext = React.createContext();

function App() {
  
  
  return (

    <div className="App">
        <UserContext.Provider value={'viswas'}>
          <ChanelContext.Provider value={'code evaluation'}>
             <ComponentA/>
          </ChanelContext.Provider>
        </UserContext.Provider>
    </div>
  );
}


export default App;
