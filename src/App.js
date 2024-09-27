import { BrowserRouter as Router } from 'react-router-dom';
import Home      from './components/pages/HomeP';
import Projects  from './components/pages/Projects';
import Contact   from './components/pages/Contact';
import About     from './components/pages/About';

import NavBar    from './components/navigation/NavBar';
import AppRouter from './components/navigation/AppRouter';

import Todolist  from './components/projects/todolist/TodoList';

import './lib/css/skeleton.css'

function App() {
  return (
    <div classname="App">
      <Router>
        <NavBar/>
        <AppRouter/>
      </Router>
    </div>

  );
}

export default App;
