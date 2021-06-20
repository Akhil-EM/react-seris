// import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
       <Hello name="akhil" heroName='batman'>this is a paragraph</Hello>
       <Hello name="amal" heroName='spiderman'><button>click</button></Hello>
       <Hello name="vyshak" heroName='superman'/>
       <Hello name="dhillu" heroName='hulk'/>

       <Welcome name="akhil" heroName='batman'>this is a paragraph</Welcome>
       <Welcome name="amal" heroName='spiderman'><button>click</button></Welcome>
       <Welcome name="vyshak" heroName='superman'/>
       <Welcome name="dhillu" heroName='hulk'/>
    </div>
  );
}


export default App;
