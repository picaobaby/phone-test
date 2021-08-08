import React, {useState} from 'react'
import MyContext from './context/MyContext'
import TestForm from './components/TestForm'
import LineChart from './components/LineChart'

// import {useForm} from 'react-hook-form'
// import { useFormState } from 'react-use-form-state'; 
// import {Bar} from 'react-chartjs-2'
// import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";  // this one works
// import { Button, DatePicker } from 'antd'; /* this one works too */
// import 'antd/dist/antd.css'; 

import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState({mon: "20", tue: "30", wed: "11", thu: "44", fri: "60", sat: "22", sun:"5"})

  return (
    <div className="App">
      <header className="App-header">
        <p>Edit <code>src/App.js</code> and save to reload.</p>
      </header>
    
      <div className="container">
        <MyContext.Provider value={[data, setData]}>
            {/* <LineChart /> */}
            {/* <TestForm /> */}
        </MyContext.Provider>
      </div>    
    </div>
  );
}
export default App