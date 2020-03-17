import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// import all components that we need to link
import Home from './components/Home';

// Entry point of the app. This will now act as the router component. 
// Home.js is the homepage component.
function App() {
  return (
    <Router>
      <div>
        <Switch>

          {/* ...other routes 
          
              Homepage route should come last
          */}

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  )
}

export default App;