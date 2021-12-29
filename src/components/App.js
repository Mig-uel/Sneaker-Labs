import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';

import Home from './Home';

function App() {
  return (
    <Router>
      <div className="Container">
        <Switch>
          <Route exact path="/" element={<Home />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
