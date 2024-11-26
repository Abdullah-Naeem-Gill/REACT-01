// App.js
import React from 'react';
import Form from './components/Form';
import Toggle from './components/Toggle';
import Count from './components/Count';
import Todo from './components/Todo';

const App = () => {
  return (
    <div>
      <Todo />
      {/* <Toggle/> */}
     <Form />
      <Count />
    </div>
  );
};

export default App;
