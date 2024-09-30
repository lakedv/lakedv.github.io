import { BrowserRouter as Router } from 'react-router-dom';

import NavBar    from './components/navigation/NavBar';
import AppRouter from './components/navigation/AppRouter';

import './lib/css/styles.css'
import './lib/css/skeleton.css'

function App() {
  return (
    <div classname="app">
      <Router>
        <NavBar/>
        <AppRouter/>
      </Router>
    </div>
  );
}

export default App;
