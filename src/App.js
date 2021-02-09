import './App.css';
import HeaderLink from './components/HeaderLink';
import DarkToggle from './components/DarkToggle';
import {
  BrowserRouter as Router,
  Switch, Route, Link, useLocation, useParams
} from "react-router-dom"
import { useEffect, useState } from 'react';

function App() {
  const pathname = useLocation().pathname;

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-left">

        </div>
        <div className="App-header-content">
          <HeaderLink name="Home" to="/" location={pathname} />
          <HeaderLink name="Projects" to="/projects" location={pathname} />
          <HeaderLink name="Blog" to="/blog" location={pathname} />
        </div>
        <div className="App-header-right">
          <DarkToggle/>
        </div>
      </header>
    </div>
  );
}

export default App;
