import React from 'react';
import Header from './header.js';
import Main from './main.js';

// App is the simplest possible fcnl cmpnt
// note implicit return
const App = () => (
  <div className="App">
    <Header />
    <Main />
  </div>
)

export default App;
