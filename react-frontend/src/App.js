import './App.css';
// import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ListEmployeeComponent from './Components/ListEmployeeComponent';
import FooterComponent from './Components/FooterComponent';
import HeaderComponent from './Components/HeaderComponent';


function App() {
  return (
    <div >
      <Router>
        <HeaderComponent />
        <div className= "container">
          <Routes>
              <Route  path = "/" element = {<ListEmployeeComponent/> } ></Route>
              <Route path = "/employees" element = {<ListEmployeeComponent/>}></Route>
              
            </Routes>
        </div>
        <FooterComponent />
        </Router>
    </div>
  );
}

export default App;

