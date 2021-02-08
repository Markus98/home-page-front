import './App.css';
import './components/HeaderLink'
import HeaderLink from './components/HeaderLink';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"

function App() {
  return (
    <Router className="App">
      <header className="App-header">
        <div className="App-header-content">
          <HeaderLink name="Home" to="/" />
          <HeaderLink name="Test" to="/test" />
        </div>
      </header>
    </Router>
  );
}

export default App;
