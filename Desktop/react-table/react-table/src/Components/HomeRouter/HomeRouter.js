import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class HomeRouter extends Component{
    render(){
        return(
            <div className="HomeRouter">
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/TravelBooking">TravelBooking</Link></li>
                <li><Link to="/TravelDetail">TravelDetail</Link></li>
                </ul>
            </div>
        )
    }
}

export default HomeRouter;