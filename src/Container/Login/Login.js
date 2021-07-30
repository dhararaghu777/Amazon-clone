import React,{useState} from 'react';
import classes from './Login.module.css';
import {Link,useHistory} from 'react-router-dom';
import {auth} from '../../firebase';
import {connect} from 'react-redux';



const Login=(props)=>{

  const history=useHistory();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState('');

  const signInHandler=(e)=>{
    e.preventDefault();
    
    auth.signInWithEmailAndPassword(email,password).then(auth=>{
        history.push("/");
    }).catch(err=>alert(err.message));
  }

  const signUpHandler=(e)=>{
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email,password).then(auth=>{
      // console.log(auth);
      if(auth){
        history.push("/");
      }

    }).catch(err=>{
      alert(err.message);
    })
  }

  

  return(
    <div className={classes.Login}>
      <Link to="/">
        <img className={classes.LoginImage}
              src="https://www.perceptiveresearch.co/wp-content/uploads/2019/03/Amazon-logo-1200x504.png" alt="login" />
      </Link>
       <div className={classes.signIn}>
         <h1>Sign-In</h1>
         <form className={classes.form}>
            <div className={classes.div}>Email Id</div>
            <input type="text" 
                   className={classes.input}
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)} />
            <div className={classes.div}>Password</div>
            <input type="password" 
                   className={classes.input}
                   value={password}
                   onChange={(e)=>setPassword(e.target.value)} />
            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
            <button type="submit" 
                    className={classes.signInButton} 
                    onClick={signInHandler}>Sign-In</button>
         </form>
       </div>
       <div className={classes.signUp}>
          <p>New to Amazon?</p>
          <button 
                className={classes.signUpButton}
                onClick={signUpHandler}>Sign-Up</button>
       </div>
    </div>
  )
}



export default Login;