import React from 'react';
import classes from './Product.module.css';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

const Product=(props)=>{

  return (
    <div key={props.id} className={classes.Product}>
      <div className={classes.ProductInfo}>
        <div className={classes.ProductName}>
          <p>{props.title}</p>
        </div>
        <div className={classes.ProductPrice}>
          <small>$</small>
          <b>{props.price}</b>
        </div>
        <div className={classes.ProductRating}>
          {Array(props.rating).fill().map((_,i)=>(
            <span key={i} role="img" aria-label=''>⭐</span>
          ))}
          
        </div>
      </div>
      <div >
        <img className={classes.ProductImage} 
             src={props.image} alt="" />
      </div>
      <div className={classes.ProductButtonDiv}>
        <button className={classes.ProductButton}
                onClick={()=>props.onAddToBasket(props.id,props.title,props.price,props.rating,props.image)}>Add To Basket</button>
      </div>
      
    </div>
  )
}

const mapDispatchToProps=dispatch=>{
  return {
    onAddToBasket:(id,title,price,rating,image)=>dispatch(actions.addToBasket(id,title,price,rating,image)),

  }
}

export default connect(null,mapDispatchToProps)(Product);