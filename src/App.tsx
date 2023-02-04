import React from 'react';
import './App.css';
import { ClassComponent } from './Components/ClassComponent';
import { FunctionalComponent } from './Components/FunctionalComponent';

function App() {
  return (
    <>
      <FunctionalComponent name='KROCKSA' />
      <br />
      <ClassComponent name='KrockSalgado' />
    </>
  );
}

export default App;
