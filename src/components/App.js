import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';

import Home from './Home';
import Nav from './Nav';

function App() {
  return (
    <Router>
      <Nav />
      <>
        <Switch>
          <Route exact path="/" element={<Home />} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
