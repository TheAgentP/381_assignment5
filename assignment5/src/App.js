import './App.css';
import React, {useState, createContext, useContext} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './components/LoginPage.js';
import HomePage from './components/HomePage.js';
import ProductPage from './components/ProductPage.js';

// export const Context = React.createContext(null);

const App = () => {
const[loggedIn, setLoggedIn] = useState(false);
  return(
    // <Context.Provider value={{loggedIn, setLoggedIn}}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </Router>
    /* </Context.Provider> */
  );
};

export default App;
