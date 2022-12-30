import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Accordian1 from './components/Accordian1';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
 Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('primary');
  const [btnText, setBtnText] = useState('enable dark mode');
  const [alertText, setAlertText] = useState(null);

  const togglemod = () => {
    if (mode === 'primary') {
      setMode('dark');
      document.body.style.backgroundColor = 'blue';
      showAlertText("Success :- Dark mode is on")

    }
    else {
      setMode('primary');
      document.body.style.backgroundColor = 'grey';
      showAlertText("Success :- light mode is on")
    }
  }
  const showAlertText = (msg) => {
    
      
      setAlertText(msg);
      setTimeout(() => {
        setAlertText(null);
      }, 2000);
    

  }


  return (

    <>
    <Router>
      <Navbar title="Textutils" aboutText="About" mode={mode} btnText={btnText} togglemode={togglemod} />
      <Alert alertText={alertText}/>
      <Switch>
        <Route path="/accordian1">
          <Accordian1 />
        </Route>
        <Route path="/">
          <Textform placehold="enter your text here" buttonText="convert into uppercase" mode={mode} showAlertText={showAlertText}/>
        </Route>

        </Switch>
    
    </Router>
    </>
  );
}

export default App;
