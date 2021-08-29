import {
  Route,
  Switch
} from 'react-router-dom'
import './App.scss';
import Home from './views/Home'
import Styleguide from './views/Styleguide'
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
  <Header />
  <main>
      <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/styleguide" component={Styleguide} />
  </Switch>
  </main>
    </div>
  );
}

export default App;
