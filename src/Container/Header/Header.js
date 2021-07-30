import React from 'react';
import classes from './Header.module.css';
import logo from '../../Images/amazon.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link,useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import {auth} from '../../firebase';
import {FaCartArrowDown } from 'react-icons/fa';


const Header=(props)=>{

  const history=useHistory();

  const onClickHandler=()=>{
    if(props.user){
      // props.onRemoveUser();
      auth.signOut();
    }
    else{
      history.push('/login');
      
    }
  }

  return (
    <div className={classes.Header}>
      <Link to="/">
        <img className={classes.logo}
        src={logo} alt="amazon-logo"/>
      </Link>
    
      <div className={classes.search}>
        <input type="text" className={classes.input} />
        <SearchIcon className={classes.searchIcon}/>
      </div>

      <div className={classes.navBar}>

        <div className={classes.option}
              onClick={onClickHandler}>
          <span 
            className={classes.optionFirst}>
            {
              props.user?<b>{`Hello ${props.user.email.slice(0,props.user.email.indexOf('@'))}`}</b>: "Hello User"
            }</span>
          <span 
            className={classes.optionSecond}>{
              props.user !==null?"Sign Out" :"Sign In"
            }</span>
        </div>
  
          <Link to="/orders" className={classes.option}>
          <span 
              className={classes.optionFirst}>Returns</span>
            <span 
              className={classes.optionSecond}>& Orders </span>
          </Link>

        <div className={classes.option}>
          <a href="https://www.primevideo.com/" alt="prime">
            <span 
              className={classes.optionFirst}>Yours</span>
            <span 
              className={classes.optionSecond}>Prime</span>
          </a>
          
        </div>
        <Link to="/checkout" 
              style={{color:"white",textDecoration:"none"}}>
          <div className={classes.optionBasket}>
            <ShoppingBasketIcon />
            {/* <FaCartArrowDown /> */}
            <span className={classes.count}>{props.basketCount}</span>
          </div>
        </Link>
      </div>
      
    </div>
  )
}


const mapStateToProps=state=>{
  return {
    basketCount:state.basket.length,
    user:state.user
  }
}

const mapDispatchToProps=dispatch=>{
  return{
    onRemoveUser:()=>dispatch(actions.removeUser())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);