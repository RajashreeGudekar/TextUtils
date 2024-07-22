import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
// import React from 'react';
import TextUtiles from './components/TextUtiles';
import Alert from './components/Alert';

function App() {
const [mode , setMode] = useState('light');
const [alert , setAlert] =useState(null);

const showAlert =(message,type)=>{
  setAlert({
  msg: message,
  type: type
})
setTimeout(()=>{
  setAlert(null);
},1500);
}

  const toggleMode =() =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.background='#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtiles - Dark Mode';
    }
    else{
      setMode('light')
      document.body.style.background='white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtiles - Light Mode';
    }
  }
  return (
    <div className='App' style={{ margin: 0, padding: 0 }}>
      <Navbar title="RTextUtiles" mode={mode} toggleMode={toggleMode}
      aboutText="About TextUtiles"/>
      <Alert alert={alert}/>
      <TextUtiles showAlert={showAlert} mode={mode} heading="Enter the text to analyze"/>
       
      {/* <About/> */}
    </div>
     
  );
}

export default App;
