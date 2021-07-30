import React from 'react';
import classes from './Subtotal.module.css';
import CurrencyFormat from 'react-currency-format';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';

const Subtotal=(props)=>{

  const history=useHistory();

  return (
    <div className={classes.Subtotal}>
      <CurrencyFormat 
        renderText={(value)=>(
          <>
            <p>Subtotal ({props.items.length} items): <strong>{value}</strong></p>
            <small className={classes.gift}>
              <input type="checkbox" />This order contains a gift
            </small>
          </>
        )
        }
        decimalScale={2}
        value={props.items.reduce((val,item)=>val+Number(item.price),0)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />  
      <div>
        <button className={classes.button}
                onClick={(e)=>{props.user?history.push("/payment"):history.push('/login')}}>Proceed to Checkout</button>
      </div>
      
    </div>
  )
}

const mapStateToProps=(state)=>{
  return {
    items:state.basket,
    user:state.user

  }
}

export default connect(mapStateToProps)(Subtotal);