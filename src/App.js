import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navigation/NavBar';
import AppRouter from './components/navigation/AppRouter';

import './lib/css/normalize.css'
import './lib/css/skeleton.css'
import './lib/css/styles.css'

function App() {

  return (

        <Router>
          <NavBar />
          <AppRouter />
        </Router>


  );
}

export default App;