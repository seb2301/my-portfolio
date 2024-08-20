import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './components/header';
import Home from './components/Home';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/experience">Experiência</Link>
        <Link to="/education">Formação Acadêmica</Link>
        <Link to="/certifications">Certificações</Link>
        <Link to="/skills">Principais Competências</Link>
        <Link to="/contact">Contato</Link>
      </nav>
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/experience" component={Experience} />
          <Route path="/education" component={Education} />
          <Route path="/certifications" component={Certifications} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
