import React from 'react';
import { connect } from 'react-redux';
import classes from './CheckoutList.module.css';
import * as actions from '../../store/actions/index';

const CheckoutList=(props)=>{

  const itemsList=props.items.map((item,id)=>(
    <div key={id} className={classes.CheckoutListItem}>
      <img src={item.image} 
          alt="" 
          className={classes.CheckoutListImage}/>
      <div className={classes.right}>
          <div className={classes.info}>{item.title}</div>
          <div>
            <small>$</small>
            <b>{item.price}</b>
          </div>
          <div>{Array(item.rating).fill().map((_,i)=>(
            <span key={i} role="img" aria-label=''>⭐</span>
          ))}</div>
          <div>
            <button 
                  className={classes.button}
                  onClick={()=>props.onRemoveItem(id)}>Remove from Basket</button>
          </div>
      </div>
  </div>
  ))

  return (
    <>
    {itemsList}
    </>
  )
}

const mapStateToProps=state=>{
  return {
    items:state.basket
  }
}

const mapDispatchToProps=dispatch=>{
return {
    onRemoveItem:(index)=>dispatch(actions.removeFrombasket(index)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CheckoutList);