import React from 'react';
import { withStyles } from '@material-ui/core';
import './about.css';

const styles = {
    wrapper:{
        background: '#F4F4F4',
        height: 'auto'
    },
    copy: {
        maxWidth: 940,
        margin: 'auto',
        paddingTop: 100,
        textAlign: 'left',
        // clearfix
        overflow: 'auto'
    },
    cta: {
        color: '#008BFF',
        float: 'right',
        textDecoration: 'none'
    }
}

const About = ({ classes }) => {
    return (
        <div id="about" className={classes.wrapper} >            
            <div className={`${classes.copy} About-copy`}>
                <p>About Us</p>
                <p>ProductGo is a meetup where Toronto's digital product development professionals can learn from our best product leaders. Each meetup will have panel discussions with a wide variety of product leaders that shape the direction of Toronto's fastest-growing technology companies. </p>
                <a className={classes.cta} href="https://www.meetup.com/ProductGO/">Visit Meetup Page</a>
            </div>
        </div>
    )
}

export default withStyles(styles)(About)