import React from 'react';
import classes from './Checkout.module.css';
import Subtotal from '../../Components/Subtotal/Subtotal';
import CheckoutList from '../../Components/CheckoutList/CheckoutList';


const Checkout=(props)=>{

  return (
    <div className={classes.Checkout}>
      <div className={classes.CheckoutLeft}>
        <div className={classes.BasketHeader}>
          <h2>Your shopping basket</h2>
        </div>
        <div className={classes.CheckoutItems}>
            <CheckoutList />
        </div>
      </div>
      <div className={classes.CheckoutRight}>
          <Subtotal />
      </div>
    </div>
  )
}

export default Checkout;