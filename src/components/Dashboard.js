import React from "react";


import Analysis from './Analysis';
import Ratings from './Ratings';
import Reviews from './Reviews';
import Sidebar from './Sidebar';
import Visitors from './Visitors'; 

function Dashboard(props) {
    return(
        <div id='dashboard'>
           
            <Analysis/>
            <Ratings/>
            <Reviews/>
            <Sidebar/>
            <Visitors/>
          
        </div>
    );
}
 
export default Dashboard;