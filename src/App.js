import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import Login from "./pages/login";
import Navbar from "./components/navbar";
import Footer from './components/Footer';


function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/login" component={Login} exact/>
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
