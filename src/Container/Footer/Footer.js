import React from 'react';
import classes from './Footer.module.css';

function Footer() {
    return (
        <div className={classes.Footer}>
            <div className={classes.section}>
                <div className={classes.heading}>Get to Know Us</div>
                <div className={classes.options}>About Us</div>
                <div className={classes.options}>Careers</div>
                <div className={classes.options}>Amazon Cares</div>
                <div className={classes.options}>Gift a smile</div>
            </div>
            <div className={classes.section}>
                <div className={classes.heading}>Connect with Us</div>
                <div className={classes.options}>Facebook</div>
                <div className={classes.options}>Tweeter</div>
                <div className={classes.options}>Instagram</div>
                <div className={classes.options}>LinkedIn</div>
            </div>
            <div className={classes.section}>
                <div className={classes.heading}>Make Money with Us</div>
                <div className={classes.options}>Sell on Amazon</div>
                <div className={classes.options}>Amazon Global Selling</div>
                <div className={classes.options}>Become an Affiliate</div>
                <div className={classes.options}>Advertise Your Products</div>
            </div>
            <div className={classes.section}>
                <div className={classes.heading}>Let Us Help You</div>
                <div className={classes.options}>COVID-19 and Amazon</div>
                <div className={classes.options}>Your Account</div>
                <div className={classes.options}>Returns Centre</div>
                <div className={classes.options}>Amazon App Download</div>
            </div>
        </div>
    )
}

export default Footer
