import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import NavBar from './components/NavBar';
import Home from './components/Home';
import DataFetch from './components/DataFetch';
import Form from './components/Form';
import Toggle from './components/Toggle';
import Count from './components/Count';
import Todo from './components/Todo';
import Theme from './components/UseEffect/Theme';
import FormFocus from './components/UseRef/FormFocus';
import ThemeProvider from './components/UseEffect/ThemeProvider';
import StorePreState from './components/UseRef/StorePreState';
import CounterUseEffect from './components/UseEffect/CounterUseEffect';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/theme"
          element={
            <ThemeProvider>
              <Theme />
            </ThemeProvider>
          }
        />
        <Route path="/form-focus" element={<FormFocus />} />
        <Route path="/store-pre-state" element={<StorePreState />} />
        <Route path="/counter-use-effect" element={<CounterUseEffect />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/form" element={<Form />} />
        <Route path="/count" element={<Count />} />
        <Route path="/data-fetch" element={<DataFetch />} />
        <Route path="/toggle" element={<Toggle />} />
      </Routes>
    </Router>
  );
};

export default App;
