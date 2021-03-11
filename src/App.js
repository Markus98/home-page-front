import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import BlogPage from './components/BlogPage'
import ContactPage from './components/ContactPage';
import ReactNotification from 'react-notifications-component'

function App() {

  return (
    <div className="App">
      <ReactNotification />
      <Header />
      <div className="PageContent">
        <Switch>
          <Route path="/projects/:projectid">
            <BlogPage apipath={"/api/projects/"}/>
          </Route>
          <Route path="/projects">
            <ProjectsPage/>
          </Route>
          <Route path="/contact">
            <ContactPage/>
          </Route>
          <Route path="/:page">
            <div>Resource not found.</div>
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
