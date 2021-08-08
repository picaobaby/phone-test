// import 'core-js/es/map';
// import 'core-js/es/set';
// import 'raf/polyfill';

import {useForm} from 'react-hook-form'
// import { useFormState } from 'react-use-form-state'; 
import {Bar} from 'react-chartjs-2'
// import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";  // this one works
// import { Button, DatePicker } from 'antd'; /* this one works too */
// import 'antd/dist/antd.css'; 

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <p>chartjs import added</p>

        {/* <Button type="primary">PRESS ME</Button> */}
        {/* <DatePicker placeholder="select date" /> */}
      </header>
    </div>
  );
}

export default App;
