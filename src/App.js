import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner.js';
import ItemList from './components/ItemList.js';

function App() {

  
  return (
    <div className="App">
      <Banner></Banner>
      <div class="item_container">
      <ItemList></ItemList>
      </div>
      
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
