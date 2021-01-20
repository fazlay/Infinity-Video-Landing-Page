import './App.css';
//import Navbar from './components/navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
//import Sidebar from './components/sidebar';
import Home from './pages/index';

function App() {
  return (
    <Router>

      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/signin " component={Home} exact/>
      </Switch>
  </Router>
  );
}
 
export default App;

//3.04