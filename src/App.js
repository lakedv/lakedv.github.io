import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navigation/NavBar';
import AppRouter from './components/navigation/AppRouter';
import Chatbot from './components/projects/chatbot/Chatbot'

import './lib/css/styles.css'
import './lib/css/bootstrap.min.css'
import './components/projects/chatbot/Chatbot'

function App() {

  return (

        <Router>
        <Chatbot/>
        </Router>
  );
}

export default App;