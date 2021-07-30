import React,{useState} from 'react'
import styled from 'styled-components';
import RightNav from './RightNav';
import logo from '../../Images/amazon.png';
import {Link} from 'react-router-dom';

function Burger() {

    const [open, setopen] = useState(false)

    return (
        <BurgerNav>
            <Link to="/" className="logo">
                <Logo src={logo} alt="amazon-logo"/>
            </Link>
            
           <StyledBurger open={open} onClick={()=>setopen(!open)}>
               <div></div>
               <div></div>
               <div></div>
            </StyledBurger> 
            <RightNav open={open} clicked={()=>setopen(!open)} />
        </BurgerNav>
    )
}

export default Burger;

const BurgerNav=styled.nav`
    height: 60px;
    align-items:center;
    display: flex;
    color:white;
    background-color:#131921;
    position: sticky;
    top:0;
    z-index: 100;
    overflow: hidden;
   

    @media (min-width: 721px){
        display: none;
        
    }
`

const Logo=styled.img`
    width:100px;
    object-fit: contain;
    margin: 0 20px;
    margin-top:18px;
`


const StyledBurger=styled.div`
    width: 2rem;
    height: 2rem;
    position:${({open})=>open? 'fixed': 'absolute'};
    top: 15px;
    right: 20px;
    display: none;
    z-index: 10;

    @media (max-width: 720px){
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        flex-wrap: nowrap;
    }

    div{
        width: 2rem;
        height: 0.25rem;
        border-radius: 18px;
        background-color: ${({open})=>open ? '#ccc' : '#fff'};
        transform-origin: 1px;
        transition: all 250ms ease;

        &:nth-child(1){
            transform: ${({open})=> open ? 'rotate(45deg)': 'rotate(0)'  } ;
        }

        &:nth-child(2){
            transform: ${({open})=> open ? 'translateX(100%)': 'translateX(0%)'};
            opacity: ${({open})=>open ? 0 : 1};
        }

        &:nth-child(3){
            transform: ${({open})=> open ? 'rotate(-45deg)': 'rotate(0)'  } ;
        }
    }
`