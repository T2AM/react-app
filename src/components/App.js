import React from 'react';
import Navbar from './navbar.js';
import Main from './main.js';

// App is the simplest possible fcnl cmpnt
// note implicit return
const App = () => (
  <div className="App">
    <Navbar />
    <Main />
  </div>
)

export default App;
