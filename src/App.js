import React, { Component } from 'react';
import Header from 'header';
import Main from 'main';

// App is the simplest possible fcnl cmpnt
// note implicit return
const App = () => (
  <div className="App">
    <Header />
    <Main />
  </div>
)

export default App;
