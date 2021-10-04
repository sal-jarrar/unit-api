import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header />
      <Route exact path='/' component={Home} />
    </Router>
  );
};

export default App;
