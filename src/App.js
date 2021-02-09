import './App.css';
import './components/HeaderLink'
import HeaderLink from './components/HeaderLink';
import {
  BrowserRouter as Router,
  Switch, Route, Link, useLocation, useParams
} from "react-router-dom"

function App() {
  const pathname = useLocation().pathname;

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-content">
          <HeaderLink name="Home" to="/" location={pathname} />
          <HeaderLink name="Projects" to="/projects" location={pathname} />
          <HeaderLink name="Blog" to="/blog" location={pathname} />
        </div>
      </header>
    </div>
  );
}

export default App;
