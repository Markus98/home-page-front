import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import HomePage from './components/HomePage';

function App() {

  return (
    <div className="App">
      <Header />
      <div className="PageContent">
        <Switch>
          <Route path="/projects">
            <div className="ContentTextArea">
              Here are projects
            </div>
          </Route>
          <Route path="/blog">
            <div className="ContentTextArea">
              Here is blog
            </div>
          </Route>
          <Route path="/contact">
            <div className="ContentTextArea">
              Here is contact
            </div>
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
