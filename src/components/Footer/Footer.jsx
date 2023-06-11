import React from 'react';
import {Link} from "react-router-dom";
import classes from "./MyFooter.module.css";

const Footer = (props) => {
    return (
        <div className={classes.myFooter} {...props}>
            <div className={classes.myFooterNav} {...props}>
                <Link to="/name">name</Link>
                <Link to="/name">name</Link>
            </div>
        </div>
    );
};

export default Footer;