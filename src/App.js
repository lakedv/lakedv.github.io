import { BrowserRouter as Router } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import NavBar from './components/navigation/NavBar';
import AppRouter from './components/navigation/AppRouter';

import './lib/css/normalize.css'
import './lib/css/skeleton.css'
import './lib/css/styles.css'

function App() {
  
  const date = new Date().getFullYear()

  return (
    <span>
      <div classname="app">
        <Router>
          <NavBar />
          <AppRouter />
        </Router>
      </div>
      <footer className='footer'><a href='https://github.com/lakedv'><FontAwesomeIcon icon={faGithub}/></a> Copyright® German Mirarchi-{date} <a href='https://www.linkedin.com/in/german-mirarchi-07b13b175/'><FontAwesomeIcon icon={faLinkedin} /></a></footer>
    </span>
  );
}

export default App;


//to do list: crear clase shadow para unificar todas las sombras, completar css, completar home y about.