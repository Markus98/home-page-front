import { Switch, Route } from 'react-router-dom';
import './App.css';
import './components/Arrow.css';
import Header from './components/Header'
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import BlogPage from './components/BlogPage'
import ContactPage from './components/ContactPage';
import ReactNotification from 'react-notifications-component'
import ReactGA from 'react-ga';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    // Initialize Google analytics
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App">
      <ReactNotification />
      <Header />
      <div className="page-content">
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
