import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import Contact from './pages/Contact.js';
import './App.css';


export default function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" activeClassName="selected">  Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="selected"> About</NavLink>
              </li>
              <li>
                <NavLink to="/projects" activeClassName="selected"> Projects</NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="selected"> Contact</NavLink>
              </li>
            </ul>
          </nav>
        </header>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <main>
          <Switch>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/projects">
              <Projects />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

