import React,{useState,useEffect} from 'react';
import classes from './Payment.module.css';
import {connect} from 'react-redux';
import CheckoutList from '../../Components/CheckoutList/CheckoutList';
import {CardElement,useStripe,useElements} from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import axios from '../../axios';
import {useHistory} from 'react-router-dom';
import * as actions from '../../store/actions/index';
import {db} from '../../firebase';
import {Redirect} from 'react-router-dom'

const Payment=(props)=>{
  const history=useHistory();
  const stripe=useStripe();
  const elements=useElements();

  const [processing,setProcessing]=useState(false);
  const [succeeded,setSucceeded]=useState(false);
  const [error,setError]=useState(null);
  const [disabled,setDisabled]=useState(true);
  const [clientSecret,setClientSecret]=useState(null);

  useEffect(()=>{
    const getClientSecret=async()=>{
        const response= await axios({
          method:'post',
          url:`/payments/create?total=${props.items.reduce((val,item)=>val+Number(item.price),0)*100}`
        });
        setClientSecret(response.data.clientSecret);
    }

    getClientSecret();
  },[props.items]);

  console.log(clientSecret);

  const onSubmitHandler=async(e)=>{
      e.preventDefault();

      setProcessing(true);
      
      setTimeout(()=>{
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        db.collection('users').doc(props.user.uid).collection('orders').doc(`${Math.random()}`).set({
          basket:props.items,
          amount:props.items.reduce((val,item)=>val+Number(item.price),0),
          created:Date()
        });
       
        props.onClearBasket();
        history.replace('/orders');

      },1000)

      // const payment=await stripe.confirmCardPayment(clientSecret,{
      //   payment_method:{
      //     card:elements.getElement(CardElement)
      //   }
      // }).then(({paymentIntent})=>{
      //   setSucceeded(true);
      //   setError(null);
      //   setProcessing(false);

      //   db.collection('users').doc(props.user.uid).collection('orders').doc('user').set({
      //     basket:props.items,
      //     amount:props.items.reduce((val,item)=>val+Number(item.price),0),
      //     created:Date()
      //   });
      //   console.log("Payment Intent", paymentIntent);

      //   props.onClearBasket();
      //   history.replace('/orders');
      // })

      // console.log("payment Result",payment);
  } 

  const onChangeHandler= e=>{
    setDisabled(e.empty);
    setDisabled(e.error? e.error.message: "");
  }


  return (
     props.user?
    <div className={classes.Payment}>
      <div className={classes.PaymentSection}>
        <div className={classes.section1}>
          <h3>Delivery Address</h3>
        </div>
        <div className={classes.section2}>
          <p>{props.user.email}</p>
          <p>Tirupati</p>
          <p>India-517501</p>
        </div>
      </div>
      <div className={classes.PaymentSection}>
        <div className={classes.section3}>
          <h3>Review Items and Delivery</h3>
        </div>
        <div className={classes.section4}>
          <div><CheckoutList /></div>
        </div>
      </div>
      <div className={classes.PaymentSection}>
        <div className={classes.section5}>
          <h3>Payment Method</h3>
        </div>
        <div className={classes.section6}>
          <h5>Card Details</h5>
          <form onSubmit={onSubmitHandler}>
            <CardElement onChange={onChangeHandler} />
          </form>
          <div className={classes.paymentTotal}>
                <CurrencyFormat 
                  renderText={(value)=>(
                    <>
                      <p>Subtotal ({props.items.length} items): <strong>{value}</strong></p>
                        {/* <small className={classes.gift}>
                          <input type="checkbox" />This order contains a gift
                        </small> */}
                    </>
                  )
                  }
                  decimalScale={2}
                  value={props.items.reduce((val,item)=>val+Number(item.price),0)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />  
                <button className={classes.PaymentButton} 
                        onClick={onSubmitHandler} 
                    disabled={processing || disabled || succeeded}>
                      <span>{processing ? 'Processing':'Buy Now'}</span>
                </button>
          </div>
        </div>
      </div>
    </div>:<Redirect to="/" />
  )
}

const mapStateToProps=state=>{
  return {
    user:state.user,
    items:state.basket
  }
}

const mapDispatchToProps=dispatch=>{
  return {
    onClearBasket:()=>dispatch(actions.clearBasket())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Payment);