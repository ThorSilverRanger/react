import './App.css';
import React from "react";
import FormComponent from "./components/Form";

const App = () => {
  return (
    <div>
      <h1 className='form-title'>Форма реєстрації</h1>
      <FormComponent />
    </div>
  );
};

export default App;
