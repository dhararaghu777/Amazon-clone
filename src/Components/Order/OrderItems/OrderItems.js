import React from 'react';
import classes from './OrderItems.module.css';

const OrderItems=(props)=>{

    const itemsList=props.items.map((item,id)=>(
        <div key={id} className={classes.OrderItems}>
          <img  src={item.image} 
                alt="" 
                className={classes.OrderItemsImage}/>
          <div className={classes.right}>
              <div className={classes.info}>{item.title}</div>
              <div>
                <small>$</small>
                <b>{item.price}</b>
              </div>
              <div>{Array(item.rating).fill().map((_,i)=>(
                <span key={i} role="img" aria-label=''>⭐</span>
              ))}</div>
              
          </div>
      </div>));

      return (
          <div className={classes.OrderItemParent}>
              {itemsList}
          </div>
      )
}

export default OrderItems;