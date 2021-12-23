//import './App.css';
import { Switch, Route } from 'react-router-dom';
import Resume from './screens/Resume';
import Home from './screens/Home';
import Portfolio from './screens/Portfolio';
import Contact from './screens/Contact';
import About from './screens/About';


function App() {


  return (
    <div className="App">
      <Switch>
        <Route path='/resume'>
          <Resume/>
        </Route>
        <Route path='/portfolio'>
          <Portfolio/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
