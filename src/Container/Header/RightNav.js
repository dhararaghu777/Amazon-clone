import React from 'react'
import styled from 'styled-components';
import {Link,useHistory} from 'react-router-dom';
import { FaUserCircle, FaCartArrowDown } from 'react-icons/fa';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import {auth} from '../../firebase';

function RightNav(props) {

    const history=useHistory(); 
     const onClickHandler=()=>{
        if(props.user){
        auth.signOut();
        }
        else{
        history.push('/login');
        
        }
    }

    return (
        <Total open={props.open} onClick={props.clicked}>
            <Slide>
                <div className="user">
                    <span className="user-logo"><FaUserCircle /></span>
                    <span>{props.user ? props.user.email.substring(0,props.user.email.indexOf('@')): "Hello user"}</span>
                </div>
                <Link to="/orders">Your Orders</Link>
                <a href="https://www.primevideo.com/" alt="prime">Amazon Prime</a>
                <Link to="/checkout" className="cart"> 
                    <span className="cart-logo"><FaCartArrowDown /></span>
                    <span>Your Cart (<b>{props.basketCount}</b>)</span>
                </Link>
                <button onClick={onClickHandler}>{props.user ? 'Sign-Out': 'Sign-In'}</button>
                
            </Slide>
        </Total>
    )
};


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

export default connect(mapStateToProps,mapDispatchToProps)(RightNav);

const Total=styled.div`
    display: none;

    @media (max-width: 720px){
        display: block;
        position: fixed;
        left: 0;
        right : 0;
        top: 0;
        bottom: 0;
        background: rgba(0,0,0,0.1);
        transition: transform 250ms ease-in-out;
        transform: ${({open})=> open ? 'translateX(0)' : 'translateX(100%)'};
       
    }

    
`

const Slide=styled.div `
    
   display: none;
   
    a, div, button{
        
        text-decoration:none;
        color: white;
        padding: 20px 20px;
        font-size: 20px;
        /* margin: 5px 10px; */
        display: flex;
    }

    .user{
        align-items: center;
        
        .user-logo{
            font-size: 35px;
            margin-right: 10px;
        } 
    }

    .cart{
        align-items: center;
        flex-direction: row;

        .cart-logo{
            font-size: 30px;
            margin-right: 10px;
        }
    }

    button{
        min-width: 60%;
        height: 6%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        background:#f1c14b;
        border:1px solid;
        border-color:#a88734 #9c7e31 #846a29;
        color:#111;
        border-radius: 3px;
        margin: 0 7%;
    }

    @media (max-width: 720px){
        
        position: fixed;
        top: 0;
        right: 0;
        width: 70%;
        height: 100vh;
        background-color:#131921;
        box-sizing: border-box;
        padding-top: 60px;
        padding-left: 20px;
        display: flex; 
        flex-direction: column;
        justify-content: start;
        align-items: flex-start;
        /* flex: 0; */
        
    }

    @media (max-width: 540px){
       a, div, button{
        padding: 15px 15px;
        font-size: 15px;
        margin-left: 0px;
        }

        .user{
            .user-logo{
                font-size: 25px;
            } 
        }

        .cart{
            .cart-logo{
                font-size: 20px;
            }
        }

        button{
            margin: 0 5%;
        }
    }

`

