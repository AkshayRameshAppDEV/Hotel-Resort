import React from 'react';
import './App.css'; 

// import the components that we create
import ResortInfo from './components/resortInfo';

// This will be the starting point, or the root, of the frontend page. 
function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>

      <ResortInfo/> 
    </div>
  );
}

export default App;
