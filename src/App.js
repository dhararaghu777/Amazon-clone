
import "./styles.css";
import Navbar from './Container/Header/Navbar';
import Main from './Container/Main/Main';
import {BrowserRouter as Router,Redirect,Route,Switch} from 'react-router-dom';
import Checkout from './Container/Checkout/Checkout';
import Login from './Container/Login/Login';
import React,{useEffect,Suspense} from 'react';
import Payment from './Container/Payment/Payment';
import {auth} from './firebase';
import * as actions from './store/actions/index';
import {connect} from 'react-redux';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Container/Orders/Orders';
import Footer from './Container/Footer/Footer';


const promoise=loadStripe("pk_test_51Is4JCSDcFXt3JV73hpvrOGGLrEKdytZupcMaSKXddBjmSBDeVm0jbummsLzmKGGKeiHnHe8DbBIQM6Bpfh9Wyqr00FRBbAHhW");

function App(props) {

  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
        console.log("User Details",authUser);
        if(authUser){
          props.onSetUser(authUser);
        }else{
          props.onRemoveUser();
        }
    })
  },[])


  return (
    <Router >
      <div className="App">
        
        <Switch>
        <Route path="/orders">
            <Navbar />
            <Orders />
            <Footer/>
          </Route>
          <Route path="/payment">
            <Navbar />
            <Elements stripe={promoise} >
              <Payment />
            </Elements>
          </Route>
          <Route path="/login" >
            <Login/>
          </Route>
          <Route path="/checkout">
            <Navbar />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/">
            <Navbar />
            <Main />
            <Footer />
          </Route>
          <Redirect to="/" />
        </Switch>
      
    </div>
    </Router>
    
  );
}

const mapStateToProps=state=>{
  return {
    user:state.user
  }
}

const mapDispathToProps=dispatch=>{
  return {
    onSetUser:(authUser)=>dispatch(actions.setUser(authUser)),
    onRemoveUser:()=>dispatch(actions.removeUser())
  }
}

export default connect(mapStateToProps,mapDispathToProps)(App);
