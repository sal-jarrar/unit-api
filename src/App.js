import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Application from './Application';
import Accounts from './Accounts';

const App = () => {
  return (
    <Router>
      <Header />
      <Route exact path='/' component={Home} />
      <Route exact path='/application' component={Application} />
      <Route exact path='/accounts' component={Accounts} />
    </Router>
  );
};

export default App;
