import React from 'react';
import './App.css';
import { ChildrenComponent } from './Components/ChildrenComponent';
function App() {
  return (
    <>
     < ChildrenComponent 
     firstName='Roger' 
     lastName='Salgado'
     clickReturnName={(Name)=>{
      console.log(Name);
      
     }}
    />
    </>
  );
}

export default App;
