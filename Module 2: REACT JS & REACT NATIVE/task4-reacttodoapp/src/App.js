import './App.css';
// import InputFieldsAndButtons from './Components/InputFieldsAndButtons/InputFieldsAndButtons';
// import { useState } from 'react';
import Header from './Components/Header/Header';
import TodosBody from './Components/TodoBody/TodosBody';

function App() {
  return (
    <>
      <div className="container my-4">
        <Header />
        <TodosBody />
      </div>
    </>
  );
}

export default App;
