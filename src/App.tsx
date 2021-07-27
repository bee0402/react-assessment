import React from 'react';
import './App.css';
import Header from './component/Header'; 
import Body from './component/Body'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <div className="App-body">
        <Body />
      </div>
    </div>
  );
}

export default App;
