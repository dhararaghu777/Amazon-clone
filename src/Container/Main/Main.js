import React from 'react';
import classes from './Main.module.css';
import PrimePic from '../../Images/AmazonPrime.jpg';
import Product from '../../Components/Product/Product';

const Main=(props)=>{

  return (
    <div className={classes.Home}>
      <div className={classes.container}>
        <img className={classes.homeImage} 
        src="https://m.media-amazon.com/images/G/31/AmazonVideo/2019/1102620_MLP_1440x675_apv189_V3._SY1200_FMJPG_.jpg" alt='home' />
        <div className={classes.Row}>
          <Product 
              id="2345"
              title="TCL 50-inch Class 4-Series 4K UHD Smart  Roku LED TV - 50S435, 2021 Model"
              price='148'
              image="https://m.media-amazon.com/images/I/714hn7q7WxL._AC_UL320_.jpg"
              rating={5} />
          <Product 
              id="23798"
              title="SAMSUNG QN32Q50RAFXZA Flat 32 QLED 4K 32Q50 Series Smart TV (2019 model)"
              price='447'
              image="https://m.media-amazon.com/images/I/51NKhnjhpGL._AC_UL320_.jpg"
              rating={4} />
          
        </div>
        <div className={classes.Row}>
        <Product 
              id="23782"
              title="Nokia 3.4 Unlocked Android Smartphone with 3/64 GB Memory, 6.39-Inch HD+ Screen"
              price='149'
              image="https://m.media-amazon.com/images/I/61hB7i2DHFL._AC_UY218_.jpg"
              rating={4} />
        <Product 
              id="25645"
              title="Samsung Galaxy S21 5G | Factory Unlocked Android Cell Phone | US Version 5G Smartphone"
              price='779'
              image="https://m.media-amazon.com/images/I/512Va+-kCJL._AC_UY218_.jpg"
              rating={5} />
        <Product 
              id="232445"
              title="OnePlus 8 Glacial Green,​ 5G Unlocked Android Smartphone U.S Version"
              price='489'
              image="https://m.media-amazon.com/images/I/51uEwkqjZTL._AC_UY218_.jpg"
              rating={5} />
        </div>
        <div className={classes.Row}>
        <Product 
              id="23785"
              title="USB-C Portable Monitor - 15.6 Inch FHD HDR FreeSync Zero Frame "
              price='189'
              image="https://m.media-amazon.com/images/I/51BKyt7YYpL._AC_UY218_.jpg"
              rating={5} />
         
        </div>
      </div>
    </div>
  )
}

export default Main;