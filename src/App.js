import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/navigation/NavBar";
import AppRouter from "./components/navigation/AppRouter";

import "./lib/css/styles.css";
import "./lib/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <NavBar />
      <AppRouter />
    </Router>
  );
}

export default App;
