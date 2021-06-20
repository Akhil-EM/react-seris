// import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Welcome from './components/Welcome'
import EventClass from './components/EventClass'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
function App() {
  return (
    <div className="App">
         <ParentComponent/>
    </div>
  );
}


export default App;
