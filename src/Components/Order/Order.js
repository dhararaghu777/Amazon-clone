import React from 'react';
import classes from './Order.module.css';
import OrderItems from './OrderItems/OrderItems';
import moment from 'moment';

function Order({order}) {
    console.log("Orders-->",order);
    return (
        <div className={classes.Order}>
            <div>
                <p>Order Amount: <strong>${order.data.amount}</strong> </p>
                <p>Order placed date:<strong> {order.data.created}</strong></p>
            </div>
            <p>Ordered Items:</p>
            <OrderItems items={order.data.basket} />
        </div>
    )
}

export default Order;