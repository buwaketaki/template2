import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Page  from './Components/page1';
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
    <Route path="/" exact component={Page} />
    </div>
      );
}

export default App;
