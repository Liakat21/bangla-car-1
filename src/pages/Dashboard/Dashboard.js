import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    // useParams,
    useRouteMatch
  } from "react-router-dom";
import DashboardHome from './DashboardHome';
import MyOrder from './MyOrder';
import Review from './Review';

  

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    return (
        <div className="row">
            
            
      
     <div className="col-md-3">
     <ul >
        <li>
          <Link to={`${url}`}>Dashboard</Link>
        </li>
        <li>
          <Link to={`${url}/review`}>Review</Link>
        </li>
        <li>
          <Link to={`${url}/my order`}>My Order</Link>
        </li>
      </ul>
     </div>

     <div className="col-md-9" >
     <Switch>
        <Route exact path={path}>
          <DashboardHome></DashboardHome>
        </Route>
        <Route path={`${path}/review`}>
        <Review></Review>
        </Route>
        <Route path={`${path}/my order`}>
        <MyOrder></MyOrder>
        </Route>
      </Switch>
     </div>
    </div>
  );
}
       
    


export default Dashboard;