import logo from "./logo.svg";
import "./App.css";
import MyButtons from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <MyButtons btnText="the k production" />
      <ImageComponent
        src="https://images.unsplash.com/photo-1693336428994-c8bb3bdad0d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        alt="
        the k production"
      />
    </div>
  );
}

export default App;
