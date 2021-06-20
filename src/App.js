// import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
         <Hello name='akhil' heroName='batman'/>
         <Hello name='amal' heroName='superman'/>
         <br/>
         <Welcome name='dhillu' heroName='batman'></Welcome>
         <Welcome name='ajil' heroName='superman'></Welcome>
         <Welcome name='vyshak' heroName='ironman'></Welcome>
    </div>
  );
}


export default App;
