import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Contact from './Pages/Home/Contact/Contact';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
