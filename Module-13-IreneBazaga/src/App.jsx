import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import ProjectGallery from './components/ProjectGallery';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div id="app">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={ProjectGallery} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;