import React, {Component} from 'react';
import TravelBooking  from './Components/TravelBooking/TravelBooking';
import Home from './Components/Home/Home'
import TravelDetail from './Components/TravelDetail/TravelDetail'
import HomeRouter from './Components/HomeRouter/HomeRouter';
import './Components/TravelBooking.css'
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import Form from './Components/TravelBooking/Form';
// import DropDown from './Components/TravelBooking/DropDown';
class App extends Component {
  render(){
    return (
      <div className="App">
        <Router>
          <HomeRouter/>
          <Route path="/" exact strict component={Home}/>
          <Route path="/TravelBooking" exact strict component={TravelBooking}/>
          <Route path="/TravelDetail" exact strict component={TravelDetail}/>
        </Router>
         {/* React-Bootstrap-Table */}
        {/* <TravelBooking />
        <Home/>
        <TravelDetail/>  */}
        {/* <Form/> */}
        {/* <DropDown/> */}
      </div>
    );
  }
  
}

export default App;
