import logo from './logo.svg';
import './App.css';
import Event from './components/Event';
import Testtest from './components/testtest'
import Buttons from'./components/Buttons'
import Input from './components/Calculator'
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Event/> */}
      {/* <Testtest/> */}
      {/* <Buttons/> */}
      <Input/>
    </div>
  );

}


export default App;
