import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navigation/NavBar';
import AppRouter from './components/navigation/AppRouter';
import Chat from './components/projects/chatbot/Chat'

import './lib/css/styles.css'
import './lib/css/bootstrap.min.css'

function App() {

  return (

        <Router>
        <Chat/>
        </Router>
  );
}

export default App;