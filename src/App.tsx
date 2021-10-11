import React from 'react';
import logo from './logo.svg';
import './App.css';
import TimeSheet from './components/TableStruct';
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <TimeSheet/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
