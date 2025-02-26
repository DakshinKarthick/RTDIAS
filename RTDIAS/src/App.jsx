import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/admin" component={AdminPanel} />
        {/* Other Routes can go here */}
      </Switch>
    </Router>
  );
}

export default App;
