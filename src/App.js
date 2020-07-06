import React from "react";
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import "./styles.css";
import SignIn from './components/auth/SignIn';


export default function App() {
  return (
    <div className="App">
      <SignIn/>
    </div>
  );
}
