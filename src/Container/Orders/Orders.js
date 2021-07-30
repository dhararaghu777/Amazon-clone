import React,{useState,useEffect,Suspense} from 'react';
import {connect} from 'react-redux';
import {db} from '../../firebase';
import Order from '../../Components/Order/Order';
import classes from './Orders.module.css';

function Orders(props) {
    const [orders,setOrders]=useState([]);

    useEffect(()=>{
        if(props.user){
            db.collection('users').doc(props.user.uid).collection('orders').orderBy('created','desc').onSnapshot(snapShot=>{
                setOrders(snapShot.docs.map(doc=>({data:doc.data()})));
            })
        }
        else{
            setOrders([]);
        }
    },[props.user])
    return (
        <div className={classes.Orders}>
         <div className={classes.OrdersTitle}>Orders History</div>
         <Suspense fallback={<h1>Loading..!</h1>}>
            <div className={classes.OrdersItems}>
                {orders ? orders.map((order,i)=>(
                    <Order key={i} order={order} />
                )):<h3>No Orders</h3>}
            </div>
        </Suspense>
        </div>
    )
}


const mapStateToProps=state=>{
    return {
        user:state.user,

    }
}


export default connect(mapStateToProps)(Orders);
