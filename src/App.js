
import './App.css';

import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';

import Home from './pages/Home/Home';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import News from './pages/News/News';
import Login from './pages/Login/Login';
import AboutUs from './pages/AboutUs/AboutUs';
import Advice from './pages/Advice/Advice';

import Car from './pages/Cars/Car';
import NewCar from './pages/NewCar/NewCar';
import Register from './pages/Register/Register';
import AuthProvider from './pages/context/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard';



function App() {
  return (
    <div>
       <AuthProvider>
       <Router>
        <Header></Header>
        <Switch>
          <Router exact path="/">
            <Home></Home>
          </Router>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/news">
            <News></News>
          </Route>               
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/about us">
            <AboutUs></AboutUs>
            </Route> 
            <PrivateRoute path="/Car">
              <Car></Car>
            </PrivateRoute>            
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>            
            <Route path="/new car">
              <NewCar></NewCar>
            </Route>            
            <Route path="/advice">
              <Advice></Advice>
            </Route>                                   
            <Route path="/register">
              <Register></Register>
            </Route>                                                                          
        </Switch>
        <Footer></Footer>
      </Router>
       </AuthProvider>
    </div>
  );
}

export default App;
