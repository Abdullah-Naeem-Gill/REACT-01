// App.js
import React from 'react';
import Form from './components/Form';
import Toggle from './components/Toggle';
import Count from './components/Count';
import Todo from './components/Todo';
import Theme from './components/UseEffect/Theme'
import FormFocus from './components/UseRef/FormFocus';
import ThemeProvider from './components/UseEffect/ThemeProvider';
import StorePreState from './components/UseRef/StorePreState';


import CounterUseEffect from './components/UseEffect/CounterUseEffect';

const App = () => {
  return (
    <div>
       <ThemeProvider>
      <Theme />
    </ThemeProvider>
    <FormFocus/>
    <StorePreState />
      <CounterUseEffect />
   
      <Todo />
      {/* <Toggle/> */}
     <Form />
      <Count />
    </div>
  );
};

export default App;
