import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Galerija from './components/galerija/galerija';
import Kids from './components/kids/kids'
import Shop from './components/shop/shop'
import Glavna from './components/pages/glavna_page';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Glavna} />
          <Route exact path="/galerija" component={Galerija} />
          <Route exact path="/kids" component={Kids} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
